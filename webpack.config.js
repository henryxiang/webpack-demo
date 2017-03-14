const config = {
  entry: './src/app',
  output: {
    path: __dirname + '/build',
    filename: 'app.bundle.js'
  }
};

const doConfig = (env) => {
  return config;
};

//module.exports = config;
module.exports = doConfig;