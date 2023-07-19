import type { Config } from "jest"

const config: Config = {
  clearMocks: true,
  coverageProvider: "v8",
  moduleDirectories: ["node_modules", "src"],
  preset: "ts-jest",
  resolver: "ts-jest-resolver",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "node",
}

export default config
