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
  module: {
    loaders: [
      // {test: /\.css$/, loaders: ['style-loader', 'css-loader']}
        {test: /\.css$/, loader: 'style-loader!css-loader'}
      
    ]
  },
  plugins: [
     new HtmlWebpackPlugin()
  ]
};

const doConfig = (env) => {
  if (!env.prod) {
    config.devtool = '';
  }
  return config;
};

//module.exports = config;
module.exports = doConfig;