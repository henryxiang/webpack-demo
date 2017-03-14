const config = {
  entry: './src/app',
  output: {
    path: __dirname + '/build',
    filename: 'app.bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build',
    port: 8000,
    open: true,
    compress: true,
    stats: 'errors-only'
  }
};

const doConfig = (env) => {
  return config;
};

//module.exports = config;
module.exports = doConfig;