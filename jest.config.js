module.exports = {
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
