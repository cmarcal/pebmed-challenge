module.exports = {
	preset: 'ts-jest',
	rootDir: './src',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
	testPathIgnorePatterns: ['node_modules/', 'react-credit-cards/es/styles-compiled.css'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	moduleNameMapper: {
		'^src(.*)$': '<rootDir>/$1',
		"\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
		"identity-obj-proxy",
	"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
	testMatch: ['**/*.test.(ts|tsx)'],
	moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
	collectCoverage: true,
	coveragePathIgnorePatterns: ['<rootDir>/assets/*', 'react-credit-cards/es/styles-compiled.css'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	restoreMocks: true,
  clearMocks: true,
  resetMocks: true,

};
