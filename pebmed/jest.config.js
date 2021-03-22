module.exports = {
	rootDir: './src',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
	testPathIgnorePatterns: ['node_modules/'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	moduleNameMapper: {
		'^src(.*)$': '<rootDir>/$1'
	},
	testMatch: ['**/*.test.(ts|tsx)'],
	moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
	collectCoverage: true,
	coveragePathIgnorePatterns: [ '<rootDir>/assets/*'],
	setupFilesAfterEnv: [ '<rootDir>/setupTests.ts'],
	restoreMocks: true,
  clearMocks: true,
  resetMocks: true
};
