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
webpack -p src/app.js build/app.bundle.js
```

<img src="how-it-works.png" style="background-color: white" />

---

## What's new in Webpack 2

---

## Project structure

* src/                <!-- .element: class="fragment" -->
* build/              <!-- .element: class="fragment" -->
* node_modules/       <!-- .element: class="fragment" -->
* webpack.config.js   <!-- .element: class="fragment" -->

---

## The minimum configuration

```JavaScript
// webpack.config.js

module.exports = {
   entry: './src/app.js',
   output: {
       path: './build',
       filename: 'app.bundle.js'
   }
};
```

```
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
```

---

## Dev Server and Source Map


---

## Using a dedicate web server
```JavaScript
npm install -D npm-run-parallel
npm install -D json-server
```

```JavaScript
// package.json

"scripts" : {
  "webpack:dev" : "webpack -d --watch --evn.dev",
  "server:dev" : "json-server src/db.json --static ./build",
  "dev-mode" : "npm-run-parallel webpack:dev server:dev"
}

```

```
npm run dev-mode
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
