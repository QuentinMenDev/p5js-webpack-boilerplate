const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    bundle: path.resolve(__dirname, './', 'main.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  resolve: {
    extensions: [
      '.js'
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
    openPage: '',
    stats: 'errors-only',
  },

  plugins: [
    new HtmlWebpackPlugin({
      /*template: path.resolve(__dirname, 'client/src', 'index.html'),
      inject: 'body',*/
      template: './index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'assets'),
        to: path.resolve(__dirname, 'dist', 'assets'),
      }
    ])
  ],

  optimization: {
    runtimeChunk: "single", // enable "runtime" chunk

    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    },
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true // slow down the compilation part but allows us to see the location of errors in modules
      })
    ]
  },

  devtool: 'source-map'
};
