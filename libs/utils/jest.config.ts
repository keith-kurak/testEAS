import {Config} from 'jest';

const config: Config = {
  displayName: 'utils',
  preset: 'react-native',
  resolver: '@nx/jest/plugins/resolver',
  globalSetup: '<rootDir>/../../jest.globalSetup.ts',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx', 'd.ts'],
  setupFilesAfterEnv: [
    '<rootDir>/../../node_modules/react-native/jest/setup.js',
    '<rootDir>/../../node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/../setup/test-setup.ts',
    '<rootDir>/../../__mocks__/react-native/Libraries/TurboModule/index.ts',
    '<rootDir>/../../__mocks__/react-native/Libraries/EventEmitter/index.ts',
  ],
  moduleNameMapper: {
    '\\.svg$': '@nx/react-native/plugins/jest/svg-mock',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/../../__mocks__/fileMock.ts',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|d3-shape|d3-path|@react-native-community|@react-navigation|react-redux|redux-persist|react-native-blob-util|@react-native|react-native-reanimated|react-native-svg|@usercentrics|rn-smooth-pincode-input|@launchdarkly|query-string|decode-uri-component|split-on-first|filter-obj|@datadog/mobile-react-native|immer|@reduxjs/toolkit)',
  ],
  roots: ['<rootDir>', '<rootDir>/../../__mocks__', '<rootDir>/../__mocks__'],
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
  cacheDirectory: '<rootDir>/../../.jest-cache/libs/utils',
  coverageReporters: ['html', 'text-summary', 'lcov'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/__mocks__/**',
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/coverage',
        outputName: 'junit.xml',
        addFileAttribute: 'true',
      },
    ],
  ],
};

export default config;
