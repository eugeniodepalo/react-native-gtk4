import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  target: "node20",
  format: ["cjs"],
  tsconfig: "tsconfig.build.json",
})
