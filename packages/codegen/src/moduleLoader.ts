import { readFile } from "fs/promises"
import {
  DependencyManager,
  ResolveType,
  GirModule,
  splitModuleName,
  isIterable,
  girParser,
  WARN_NO_GIR_FILE_FOUND_FOR_PACKAGE,
} from "@ts-for-gir/lib"

import type {
  GenerateConfig,
  GirModuleResolvedBy,
  DependencyMap,
  Dependency,
} from "@ts-for-gir/lib"

export class ModuleLoader {
  dependencyManager: DependencyManager
  modDependencyMap: DependencyMap = {}

  constructor(private readonly config: GenerateConfig) {
    this.dependencyManager = DependencyManager.getInstance(config)
  }

  private traverseDependencies(
    packageName: string,
    result: { [name: string]: Dependency } = {}
  ): void {
    const deps = this.modDependencyMap[packageName]

    if (isIterable(deps)) {
      for (const dep of deps) {
        if (result[dep.packageName]) continue
        result[dep.packageName] = dep
        this.traverseDependencies(dep.packageName, result)
      }
    }
  }

  private extendDependencyMapByGirModule(girModule: GirModule): void {
    this.modDependencyMap[girModule.packageName] = girModule.dependencies
  }

  private setTraverseDependenciesForModules(
    girModules: GirModuleResolvedBy[]
  ): void {
    for (const girModule of girModules) {
      const result: { [name: string]: Dependency } = {}
      this.traverseDependencies(girModule.packageName, result)
      girModule.module.transitiveDependencies = Object.values(result)
    }
  }

  private async loadAndCreateGirModule(
    dependency: Dependency
  ): Promise<GirModule | null> {
    if (!dependency.exists || dependency.path === null) {
      return null
    }

    console.log(`Parsing ${dependency.path}...`)

    const fileContents = await readFile(dependency.path, "utf8")
    const result = girParser(fileContents)
    const girModule = new GirModule(result, this.config)
    this.extendDependencyMapByGirModule(girModule)

    return girModule
  }

  private findGirModuleByFullNames(
    girModules: (GirModuleResolvedBy | GirModule)[],
    packageNames: string[]
  ): Array<GirModuleResolvedBy | GirModule> {
    return girModules.filter((girModule) =>
      packageNames.includes(girModule.packageName)
    )
  }

  private existsGirModules(
    girModules: (GirModuleResolvedBy | GirModule)[],
    packageName: string
  ): boolean {
    const foundModule = this.findGirModuleByFullNames(girModules, [packageName])
    return foundModule.length > 0
  }

  private async loadGirModules(
    inDependencies: Dependency[],
    girModules: GirModuleResolvedBy[] = [],
    resolvedBy = ResolveType.BY_HAND,
    failedGirModules = new Set<string>()
  ): Promise<{ loaded: GirModuleResolvedBy[]; failed: Set<string> }> {
    let newModuleFound = false
    const dependencies = [...inDependencies]

    while (dependencies.length > 0) {
      const dependency = dependencies.shift()

      if (!dependency?.packageName) continue

      if (!this.existsGirModules(girModules, dependency.packageName)) {
        const girModule = await this.loadAndCreateGirModule(dependency)

        if (!girModule) {
          if (!failedGirModules.has(dependency.packageName)) {
            console.warn(
              WARN_NO_GIR_FILE_FOUND_FOR_PACKAGE(dependency.packageName)
            )

            failedGirModules.add(dependency.packageName)
          }
        } else if (girModule && girModule.packageName) {
          const addModule = {
            packageName: girModule.packageName,
            module: girModule,
            resolvedBy,
            path: dependency.path,
          }

          girModules.push(addModule)
          newModuleFound = true
        }
      }
    }

    if (!newModuleFound) {
      return {
        loaded: girModules,
        failed: failedGirModules,
      }
    }

    this.setTraverseDependenciesForModules(girModules)

    for (const girModule of girModules) {
      const transitiveDependencies = girModule.module.transitiveDependencies

      if (transitiveDependencies.length > 0) {
        await this.loadGirModules(
          transitiveDependencies,
          girModules,
          ResolveType.DEPENDENCE,
          failedGirModules
        )
      }
    }

    return {
      loaded: girModules,
      failed: failedGirModules,
    }
  }

  private packageNamesToDependencies(packageNames: Set<string>): Dependency[] {
    return Array.from(packageNames).map((packageName) => {
      const { namespace, version } = splitModuleName(packageName)
      return this.dependencyManager.get(namespace, version)
    })
  }

  public async getModulesResolved(
    packageNames: string[]
  ): Promise<GirModuleResolvedBy[]> {
    const dependencies = this.packageNamesToDependencies(new Set(packageNames))
    const { loaded } = await this.loadGirModules(dependencies)

    return loaded
  }
}
