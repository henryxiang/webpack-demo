const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: './src/app',
  output: {
    path: __dirname + '/build',
    filename: 'app.bundle-[chunkhash].js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: __dirname + '/build',
    port: 8000,
    open: true,
    compress: true,
    stats: 'errors-only'
  },
  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
          publicPath: '/build'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true  
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.bundle-[chunkhash].js'
    })
  ]
};

const doConfig = (env) => {
  if (!env.prod) {
    config.devtool = '';
  }
  return config;
};

module.exports = doConfig;