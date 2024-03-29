module.exports = {
  preset: 'ts-jest',
  workerIdleMemoryLimit: 0.75,
  testEnvironment: 'jsdom',
  testRegex: '(\\.(test|spec))\\.(ts|tsx|js)$',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/fileMock.tsx',
    '~/(.*)': '<rootDir>/src/$1',
    '__mocks__/(.*)': '<rootDir>/__mocks__/$1',
  },
  setupFilesAfterEnv: [`<rootDir>/setup-jest.ts`],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.{ts,tsx,js,jsx,mdx,md}'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/', '/documentation/'],
  testResultsProcessor: 'jest-sonar-reporter',
};
