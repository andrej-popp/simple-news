const webpack = require('webpack');
const replaceInFile = require('replace-in-file');
const CracoLessPlugin = require("craco-less");
const CracoAntdPlugin = require("craco-antd");
const { whenProd } = require("@craco/craco");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require("path");

// Antd Modal.confirm localization fix
// https://github.com/ant-design/ant-design/issues/17308
const fixAntdLocalization = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    replaceInFile({
      files: 'node_modules/antd/lib/locale/default.js',
      from: /var _default = [^;]*/g,
      to: 'var _default = _interopRequireDefault(require("./ru_RU"))'
    });
    replaceInFile({
      files: 'node_modules/antd/es/locale/default.js',
      from: /(?:import .*;[\s])*export default [^;]*/g,
      to: 'import ru from \'./ru_RU\';\nexport default ru'
    });
    return webpackConfig;
  }
};

module.exports = {
  webpack: {
    plugins: [
      ...whenProd(() => [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: `./build-analysis.html`,
          openAnalyzer: false,
        }),
        new webpack.optimize.MinChunkSizePlugin({
          minChunkSize: 128000 // Minimum number of characters
        }),
      ],[])
    ],
  },
  plugins: [
    {
      plugin: CracoAntdPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, 'src/styles/antdOverrides.less')
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: function(lessRule, context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = /node_modules/;
          return lessRule;
        },
        cssLoaderOptions: {
          modules: true,
          localIdentName: whenProd(() => '[hash:base64:8]', '[name]__[local]___[hash:base64:5]'),
        },
        lessLoaderOptions: {
          javascriptEnabled: true
        }
      }
    },
    {
      plugin: fixAntdLocalization,
    }
  ]
};
