const config = {
  entry: './src/app',
  output: {
    path: './build',
    filename: 'app.bundle.js'
  }
}

const doConfig = (env) => {
  return config;
}

//module.exports = config;
module.exports = doConfig;