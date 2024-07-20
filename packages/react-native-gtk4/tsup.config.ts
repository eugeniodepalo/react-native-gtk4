import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  target: "node18",
  format: ["cjs"],
  tsconfig: "tsconfig.build.json",
})
