/**
 * Default values, parse the config file and handle CLI flags
 */
import { Options } from 'yargs'
import { join } from 'path'
import { APP_NAME, APP_USAGE } from '@ts-for-gir/lib'

import type { UserConfig, GenerateConfig } from '@ts-for-gir/lib'

export class Config {
    static appName = APP_NAME

    static usage = APP_USAGE

    /**
     * Default cli flag and argument values
     */
    static defaults = {
        outdir: './@types',
        girDirectories: getDefaultGirDirectories(),
        modules: ['*'],
    }

    /**
     * CLI options used in commands/generate.ts and commands/copy.ts
     */
    static options: { [name: string]: Options } = {
        modules: {
            description: "GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules",
            array: true,
            default: this.defaults.modules,
            normalize: true,
        },
        girDirectories: {
            type: 'string',
            alias: 'g',
            description: 'GIR directories',
            array: true,
            default: this.defaults.girDirectories,
            normalize: true,
        },
        outdir: {
            type: 'string',
            alias: 'o',
            description: 'Directory to output to',
            default: this.defaults.outdir,
            normalize: true,
        },
    }

    /**
     * CLI flags used in commands/generate.ts
     */
    static generateOptions = {
        modules: this.options.modules,
        girDirectories: this.options.girDirectories,
        outdir: this.options.outdir,
    }

    static copyOptions = {
        modules: this.options.modules,
        girDirectories: this.options.girDirectories,
        outdir: this.options.outdir,
    }

    public static getGenerateConfig(config: UserConfig): GenerateConfig {
        const generateConfig: GenerateConfig = {
            girDirectories: config.girDirectories,
            outdir: config.outdir,
        }

        return generateConfig
    }

    public static getCopyConfig(config: UserConfig): GenerateConfig {
        const generateConfig: GenerateConfig = {
            girDirectories: config.girDirectories,
            outdir: config.outdir,
        }

        return generateConfig
    }
}

function getDefaultGirDirectories(): string[] {
    const girDirectories = [
        '/usr/local/share/gir-1.0',
        '/usr/share/gir-1.0',
        '/usr/share/gnome-shell',
        '/usr/share/gnome-shell/gir-1.0',
        '/usr/lib64/mutter-10',
        '/usr/lib64/mutter-11',
        '/usr/lib64/mutter-12',
        '/usr/lib/x86_64-linux-gnu/mutter-10',
        '/usr/lib/x86_64-linux-gnu/mutter-11',
        '/usr/lib/x86_64-linux-gnu/mutter-12',
    ]

    // NixOS and other distributions does not have a /usr/local/share directory.
    // Instead, the nix store paths with Gir files are set as XDG_DATA_DIRS.
    // See https://github.com/NixOS/nixpkgs/blob/96e18717904dfedcd884541e5a92bf9ff632cf39/pkgs/development/libraries/gobject-introspection/setup-hook.sh#L7-L10
    const dataDirs = process.env['XDG_DATA_DIRS']?.split(':') || []

    for (let dataDir of dataDirs) {
        dataDir = join(dataDir, 'gir-1.0')

        if (!girDirectories.includes(dataDir)) {
            girDirectories.push(dataDir)
        }
    }
    return girDirectories
}
