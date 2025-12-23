
const {
  getResolveRequest,
} = require('@nx/react-native/plugins/metro-resolver');

const { getDefaultConfig: getExpoConfig } = require('expo/metro-config');

const expoConfig = getExpoConfig(__dirname);


/**
 * Metro configuration
 * https://reactnative.dev/docs/metro

 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
  ...expoConfig,
  resolver: {
    ...expoConfig.resolver,
    resolveRequest: getResolveRequest(sourceExts),
  },
};

module.exports = customConfig;
