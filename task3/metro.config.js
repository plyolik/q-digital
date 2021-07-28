const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-sass-transformer")
    },
    resolver: {
      sourceExts: [...sourceExts, 'ts', 'tsx', "scss", "sass", 'jpg']
    }
  };
  // transformer: {
  //   getTransformOptions: async () => ({
  //     transform: {
  //       experimentalImportSupport: false,
  //       inlineRequires: false,
  //     },
  //   }),
  //   babelTransformerPath: require.resolve("react-native-sass-transformer")
  // },
  // resolver: {
  //   sourceExts: ['jsx', 'js', 'ts', 'tsx', 'scss'], //add here
  // },
})();