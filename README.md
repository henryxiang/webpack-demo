## Webpack Configuration ##

### Setting up project

```
npm init -y
npm install -D webpack@2.2
mkdir src build
```


### The Simplest Configuration
Install the dependencies

```
npm install -D webpack live-server
```

Create Webpack configuration file
```
//webpack.config.js
const config = {
  entry: './src/app',
  output: {
    path: './build',
    filename: 'app.bundle.js'
  }
};
module.exports = config;
```

Optionally, create server.js file
```
//server.js 
var liveServer = require('live-server');
var port = 8000;
var documentRoot = './build';
var params = {
  port: port,
  host: "0.0.0.0",
  root: documentRoot,
  ignore: 'node_modules',
  wait: 500,
  logLevel: 2 // 0: errors only, 1: some details, 2: verbose
};
liveServer.start(params);
```

```
webpack && npm start
```

### JavaScript Loaders

Babel Loader

### Asset Loaders

CSS and Style Loader
Image Loaders

### Plugins

* HTML plugin

### Multiple Entries and Code Split

### Using NPM Modules

* JQuery
* React.js
* Lodash

### Side-loading Third-Party Libraries

### Lazy Loading Modules

React-Router

### Environment

Development vs. production

### Deployment
