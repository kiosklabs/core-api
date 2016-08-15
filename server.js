'use strict';

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const Hapi = require('hapi');
const Good = require('good');

const server = new Hapi.Server();
server.connection({ port: (process.env.PORT || 5000) });

}
=======
'use strict';

const Glue = require('glue');
const Hapi = require('hapi');
const manifest = require('./config/manifest.json');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (!process.env.PRODUCTION) {
  manifest.registrations.push({
    "plugin": {
      "register": "blipp",
      "options": {}
    }
  });
}

Glue.compose(manifest, { relativeTo: __dirname }, (err, server) => {
  if (err) {
    console.log('server.register err:', err);
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
      server.start(() => {
        console.log('✅  Server is listening on ' + server.info.uri.toLowerCase());
      });
  }
});
>>>>>>> revamp api architecture
