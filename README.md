## Webpack Configuration ##

### Setting up project

```
npm init -y
npm install -D webpack@2.2
mkdir src build
```


### The Simplest Configuration
Install webpack-dev-server

```
npm install -D webpack-dev-server
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

Modify package.json
```
...
  "scripts": {
    "start": "webpack-dev-server --content-base=build --open"
  }
...
```

```
npm start
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
