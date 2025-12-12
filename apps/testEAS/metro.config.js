// eslint-disable-next-line unicorn/prefer-node-protocol
const path = require('node:path');

const {
  getMetroAndroidAssetsResolutionFix,
} = require('react-native-monorepo-tools');
const {
  getResolveRequest,
} = require('@nx/react-native/plugins/metro-resolver');

const { getDefaultConfig: getExpoConfig } = require('expo/metro-config');

const assetsFix = getMetroAndroidAssetsResolutionFix();

const expoConfig = getExpoConfig(__dirname);

const monorepoRoot = path.resolve(__dirname, '../..');

const uniq = (arr) => Array.from(new Set(arr));

const sourceExts = uniq([
  ...(expoConfig.resolver?.sourceExts ?? []),
  'svg',
  'cjs',
  'mjs',
]);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro

 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
  ...expoConfig,
  watchFolders: [monorepoRoot],
  resolver: {
    ...expoConfig.resolver,
    nodeModulesPaths: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(monorepoRoot, 'node_modules'),
    ],
    assetExts: (expoConfig.resolver?.assetExts ?? []).filter(
      (e) => e !== 'svg'
    ),
    sourceExts,
    resolveRequest: getResolveRequest(sourceExts),
  },
  transformer: {
    ...expoConfig.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer/expo'),
    publicPath: assetsFix.publicPath,
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
  server: {
    ...expoConfig.server,
    enhanceMiddleware: assetsFix.applyMiddleware,
  },
};

module.exports = customConfig;
