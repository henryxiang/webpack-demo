---
title: Webpack Configuration
---

# Webpack 2 Configuration

---

## What is Webpack?

![webpack](webpack.svg)

---

## How It Works?

```bash
webpack src/app.js build/app.bundle.js
```

<img src="how-it-works.png" style="background-color: white" />

---

## What's new in Webpack 2

* Support ES6 modules     <!-- .element: class="fragment" -->
* Tree shaking            <!-- .element: class="fragment" -->
* Environment profiles    <!-- .element: class="fragment" -->
* Enhanced resolver       <!-- .element: class="fragment" -->

---

## Project structure

* src/                <!-- .element: class="fragment" -->
* build/              <!-- .element: class="fragment" -->
* node_modules/       <!-- .element: class="fragment" -->
* webpack.config.js   <!-- .element: class="fragment" -->

---

## The simplest configuration

```JavaScript
// webpack.config.js
module.exports = {
  entry: './src/app.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  }
};
```

```bash
webpack
```

---

## Webpack-validator

```bash
npm install -D webpack-validator
node_modules/.bin/webpack-validator webpack.config.js
```

---

## Development Mode

```bash
webpack -d --watch

#  -d is the short-hand for
#    --debug 
#    --devtool eval-cheap-module-source-map
#    --output-pathinfo         
```

---

## Enable source map
```JavaScript
// webpack.config.js
module.exports = {
  entry: './src/app.js',
  output: {
    path: './build',
    filename: 'app.bundle.js'
  },
  devtool: 'eval-source-map'
};
```

---

## Webpack Dev Server
```bash
npm install -D webpack-dev-server
node_modules/.bin/webpack-dev-server
```

---

## Webpack Dev Server configuration
```JavaScript
// webpack.config.js
module.exports = {
  entry: './src/app.js',
  output: {
    path: './build',
    filename: 'app.bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build',
    port: 8000,
    open: true,
    compress: true,
    stat: 'errors-only'
  }
};
```

---

## Using live-server as an alternative
```bash
npm install -D npm-run-parallel
npm install -D live-server
```

```JavaScript
// package.json
...
  "scripts" : {
    "dev:webpack" : "webpack -d --watch --evn.dev",
    "dev:server" : "live-server ./build",
    "dev" : "npm-run-parallel dev:webpack dev:server"
  }
...
```

```bash
npm run dev
```

---

## Creating a mock API
```JavaScript
npm install -D json-server
```

```JavaScript
// package.json
...
  "scripts" : {
    "dev:webpack" : "webpack -d --watch --evn.dev",
    "dev:server" : "live-server ./build",
    "dev:api" : "json-server ./src/db.json",
    "dev" : "npm-run-parallel dev:webpack dev:server dev:api"
  }
...
```

---

## HTML Webpack Plugin

Basic configuration
```bash
npm install -D html-webpack-plugin
```

```JavaScript
//webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output: {
    path: './build',
    filename: 'app.bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};

```

---

## HTML Webpack Plugin

Custom template
```JavaScript
//webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output: {
    path: './build',
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Demo App',
      template: './src/index.ejs',
      filename: './build/index.html'
    })
  ]
};

```

---

## Environment Settings

```JavaScript
modules.exports = (env) => {
  return {
    entry: './src/app.js',
    output: {
      path: './build',
      filename: 'app.bundle.js'
    },
    devtool: env.dev ? eval-source-map' : ''
  }
}
```

```bash
webpack --env.dev
```

---

## Tree Shaking

```JavaScript
// .babelrc

-  "presets": ["es2015", ...]
+  "presets": ["es2015-webpack", ...]

```

```bash
npm isntall -D babel-preset-es2015-webpack
webpack -p

```

---

## Long-term caching

---

## Separate common modules and third-party libraries

---

## Lazy-loading ES6 modules

---
