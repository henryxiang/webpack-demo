const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  plugins: [
     new HtmlWebpackPlugin()
  ]
};

const doConfig = (env) => {
  return config;
};

//module.exports = config;
module.exports = doConfig;