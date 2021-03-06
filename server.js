'use strict';

const Glue = require('glue');
const Hapi = require('hapi');
const cluster = require('cluster');
// const numCPUs = require('os').cpus().length;
// limit processor usage to prevent R10 error
const numCPUs = 4;
var manifest = require('./config/manifest.json');

manifest.connections.push(
  {
    "host": "localhost",
    "port":  process.env.PORT || 3000,
    "routes": {
      "cors": true
    },
    "router": {
      "stripTrailingSlash": true
    }
  });

if (!process.env.PRODUCTION) {
  manifest.registrations.push({
    "plugin": {
      "register": "blipp",
      "options": {}
    }
  });
}

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {
  Glue.compose(manifest, { relativeTo: __dirname }, (err, server) => {
    if (err) {
      console.log('server.register err:', err);
    }

      server.start(() => {
        console.log('✅  Server is listening on ' + server.info.uri.toLowerCase());
      });
  });
}
