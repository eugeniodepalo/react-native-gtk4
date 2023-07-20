module.exports = {
  testEnvironment: "node",
  resolver: "ts-jest-resolver",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  resetMocks: true,
  resetModules: true,
  clearMocks: true,
}
