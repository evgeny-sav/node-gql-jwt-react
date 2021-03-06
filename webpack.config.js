const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./configs/config');

module.exports = merge(common, {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: config.APP_PORT,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [new ExtractTextPlugin('styles.css')],
});
