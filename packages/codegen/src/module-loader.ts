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
  GirModulesGroupedMap,
  GenerateConfig,
  GirModuleResolvedBy,
  DependencyMap,
  Dependency,
} from "@ts-for-gir/lib"

export class ModuleLoader {
  dependencyManager: DependencyManager

  /** Transitive module dependencies */
  modDependencyMap: DependencyMap = {}
  constructor(protected readonly config: GenerateConfig) {
    this.dependencyManager = DependencyManager.getInstance(config)
  }

  /**
   * Find modules that depend on the module with the name 'packageName'
   * @param girModulesGroupedMap
   * @param packageName
   */
  protected findPackageNamesDependOnPackage(
    girModulesGroupedMap: GirModulesGroupedMap,
    packageName: string
  ): GirModuleResolvedBy[] {
    const girModules: GirModuleResolvedBy[] = []
    for (const girModulesGrouped of Object.values(girModulesGroupedMap)) {
      for (const girModuleResolvedBy of girModulesGrouped.modules) {
        if (girModuleResolvedBy.packageName === packageName) {
          continue
        }
        for (const dep of girModuleResolvedBy.module.dependencies) {
          if (
            dep.packageName === packageName &&
            !girModules.includes(girModuleResolvedBy)
          ) {
            girModules.push(girModuleResolvedBy)
          }
        }
      }
    }
    return girModules
  }

  /**
   * Find modules that depend on the module with the names in `packageNames`
   * @param girModulesGroupedMap
   * @param packageName
   */
  protected findPackageNamesDependOnPackages(
    girModulesGroupedMap: GirModulesGroupedMap,
    packageNames: string[]
  ): GirModuleResolvedBy[] {
    let girModules: GirModuleResolvedBy[] = []
    for (const packageName of packageNames) {
      girModules = girModules.concat(
        this.findPackageNamesDependOnPackage(girModulesGroupedMap, packageName)
      )
    }
    return girModules
  }

  /**
   * Figure out transitive module dependencies
   * @param packageName
   * @param result
   */
  protected traverseDependencies(
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

  /**
   * Extends the modDependencyMap by the current Module,
   * should be called for each girModule so that the modDependencyMap is complete
   * @param girModule
   */
  protected extendDependencyMapByGirModule(girModule: GirModule): void {
    this.modDependencyMap[girModule.packageName] = girModule.dependencies
  }

  /**
   * Sets the traverse dependencies for the current girModule,
   * is required so that all dependencies can be found internally when generating the dependency imports for the module .d.ts file
   * @param girModules
   */
  protected setTraverseDependenciesForModules(
    girModules: GirModuleResolvedBy[]
  ): void {
    for (const girModule of girModules) {
      const result: { [name: string]: Dependency } = {}
      this.traverseDependencies(girModule.packageName, result)
      girModule.module.transitiveDependencies = Object.values(result)
    }
  }

  /**
   * Reads a gir xml module file and creates an object of GirModule.
   * Also sets the setDependencyMap
   * @param fillName
   * @param config
   */
  protected async loadAndCreateGirModule(
    dependency: Dependency
  ): Promise<GirModule | null> {
    if (!dependency.exists || dependency.path === null) {
      return null
    }

    console.log(`Parsing ${dependency.path}...`)
    const fileContents = await readFile(dependency.path, "utf8")
    const result = girParser(fileContents)
    const girModule = new GirModule(result, this.config)
    // Figure out transitive module dependencies
    this.extendDependencyMapByGirModule(girModule)
    return girModule
  }

  /**
   * Returns a girModule found by `packageName` property
   * @param girModules Array of girModules
   * @param packageNames Full name like 'Gtk-3.0' you are looking for
   */
  protected findGirModuleByFullNames(
    girModules: (GirModuleResolvedBy | GirModule)[],
    packageNames: string[]
  ): Array<GirModuleResolvedBy | GirModule> {
    return girModules.filter((girModule) =>
      packageNames.includes(girModule.packageName)
    )
  }

  /**
   * Checks if a girModules with the `packageNames` exists
   * @param girModules
   * @param packageName
   */
  protected existsGirModules(
    girModules: (GirModuleResolvedBy | GirModule)[],
    packageName: string
  ): boolean {
    const foundModule = this.findGirModuleByFullNames(girModules, [packageName])
    return foundModule.length > 0
  }

  /**
   *  Reads the gir xml module files and creates an object of GirModule for each module
   * @param dependencies
   * @param girModules
   * @param resolvedBy
   * @param failedGirModules
   * @param ignoreDependencies
   * @returns
   */
  protected async loadGirModules(
    dependencies: Dependency[],
    ignoreDependencies: string[] = [],
    girModules: GirModuleResolvedBy[] = [],
    resolvedBy = ResolveType.BY_HAND,
    failedGirModules = new Set<string>()
  ): Promise<{ loaded: GirModuleResolvedBy[]; failed: Set<string> }> {
    let newModuleFound = false

    // Clone array
    dependencies = [...dependencies]

    while (dependencies.length > 0) {
      const dependency = dependencies.shift()
      if (!dependency?.packageName) continue
      // If module has not already been loaded
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

    // Figure out transitive module dependencies
    this.setTraverseDependenciesForModules(girModules)

    // Load girModules for dependencies
    for (const girModule of girModules) {
      // Load dependencies
      const transitiveDependencies = girModule.module.transitiveDependencies
      if (transitiveDependencies.length > 0) {
        for (const transitiveDependency of transitiveDependencies) {
          if (ignoreDependencies.includes(transitiveDependency.packageName)) {
            console.warn(
              `Load dependency "${transitiveDependency.packageName}" which is in the ignore list, if this should really be ignored also ignore "${girModule.packageName}"`
            )
          }
        }

        await this.loadGirModules(
          transitiveDependencies,
          ignoreDependencies,
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

  protected packageNamesToDependencies(
    packageNames: Set<string>
  ): Dependency[] {
    return Array.from(packageNames).map((packageName) => {
      const { namespace, version } = splitModuleName(packageName)
      return this.dependencyManager.get(namespace, version)
    })
  }

  /**
   * Loads all found `packageNames` and sorts out those that the user does not want to use including their dependencies
   * @param girDirectories
   * @param packageNames
   */
  public async getModulesResolved(
    packageNames: string[],
    ignore: string[] = []
  ): Promise<GirModuleResolvedBy[]> {
    const dependencies = this.packageNamesToDependencies(new Set(packageNames))
    const { loaded } = await this.loadGirModules(dependencies, ignore)

    return loaded
  }
}
