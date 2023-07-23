module.exports = {
  testEnvironment: "node",
  resolver: "ts-jest-resolver",
  setupFilesAfterEnv: ["<rootDir>/src/test-support/setup.js"],
  clearMocks: true,
  resetModules: true,
  resetMocks: true,
}
