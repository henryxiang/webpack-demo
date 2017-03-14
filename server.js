#!/usr/bin/env node

var path = require('path');

/* Project root directory */
var base = path.join(__dirname, ".");

/* A help function to print formatted current timestamp */
var timestamp = function() {
  var ts = new Date().toISOString();
  return "[" + ts + "]";
}

/* Development HTTP server */
var runServer = function() {
  var liveServer = require('live-server');
  var port = 8000;
  var documentRoot = base + '/build';
  var params = {
    port: port,
    host: "0.0.0.0",
    root: documentRoot,
    ignore: 'node_modules',
    // file: base + '/dist/index.html',
    wait: 500,
    logLevel: 2 // 0: errors only, 1: some details, 2: verbose
  };
  console.log(timestamp(), 'Starting server');
  liveServer.start(params);
};

runServer();
