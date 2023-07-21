module.exports = {
  testEnvironment: "node",
  resolver: "ts-jest-resolver",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  clearMocks: true,
  resetModules: true,
  resetMocks: true,
}
