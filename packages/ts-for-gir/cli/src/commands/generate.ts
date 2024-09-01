/**
 * Everything you need for the `ts-for-gir generate` command is located here
 */

import { Argv, BuilderCallback } from 'yargs'
import { ERROR_NO_MODULES_FOUND, Logger } from '@ts-for-gir/lib'
import { GeneratorType } from '@ts-for-gir/generator-base'
import { GenerationHandler } from '../generation-handler.js'
import { Config } from '../config.js'
import { ModuleLoader } from '../module-loader.js'

import type { ConfigFlags } from '@ts-for-gir/lib'

const command = 'generate [modules..]'

const description = 'Generates .d.ts files from GIR for node-gtk'

const builder: BuilderCallback<unknown, ConfigFlags> = (yargs: Argv<unknown>) => {
    const optionNames = Object.keys(Config.generateOptions)
    for (const optionName of optionNames) {
        yargs = yargs.option(optionName, Config.generateOptions[optionName])
    }
    return yargs.example(examples) as Argv<ConfigFlags>
}

const handler = async (config: ConfigFlags) => {
    const generateConfig = Config.getGenerateConfig(config)
    const moduleLoader = new ModuleLoader(generateConfig)

    const { keep, grouped } = await moduleLoader.getModulesResolved(
        config.modules,
        config.ignore || [],
        config.ignoreVersionConflicts,
    )

    if (keep.length === 0) {
        return Logger.error(ERROR_NO_MODULES_FOUND(config.girDirectories))
    }

    const tsForGir = new GenerationHandler(generateConfig, GeneratorType.TYPES)
    const girModules = Array.from(keep).map((girModuleResolvedBy) => girModuleResolvedBy.module)
    const girModulesGrouped = Object.values(grouped)

    await tsForGir.start(girModules, girModulesGrouped)
}

const examples: ReadonlyArray<[string, string | undefined]> = [
    [
        `${Config.appName} generate`,
        `Run '${Config.appName} generate' in your node-gtk project to generate typings for your project, pass the gir modules you need for your project`,
    ],
    [`${Config.appName} generate Gtk*`, 'You can also use wild cards'],
    [`${Config.appName} generate '*'`, 'If you want to parse all of your locally installed gir modules run'],
]

export const generate = {
    command,
    description,
    builder,
    handler,
    examples,
}
