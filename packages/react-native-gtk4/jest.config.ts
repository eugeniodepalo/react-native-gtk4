// jest.config.ts
import type { JestConfigWithTsJest } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: "node",
  preset: "ts-jest",
  resolver: "ts-jest-resolver",
  setupFilesAfterEnv: ["<rootDir>/src/test-support/setup.ts"],
  coveragePathIgnorePatterns: ["/node_modules/", "test-support"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.[jt]sx?$": ["ts-jest", { useESM: true }],
  },
  clearMocks: true,
  resetModules: true,
  resetMocks: true,
  restoreMocks: true,
}

export default jestConfig
