module.exports = {
  testEnvironment: "node",
  resolver: "ts-jest-resolver",
  setupFilesAfterEnv: ["<rootDir>/src/test-support/setup.js"],
  coveragePathIgnorePatterns: ["/node_modules/", "test-support"],
  clearMocks: true,
  resetModules: true,
  resetMocks: true,
  restoreMocks: true,
}
