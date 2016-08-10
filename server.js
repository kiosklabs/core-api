f'use strict';

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const Hapi = require('hapi');
const Good = require('good');

const server = new Hapi.Server();
server.connection({ port: (process.env.PORT || 5000) });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, ʕ•㉨•ʔ!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}/add',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});


if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  
    server.register({
        register: Good,
        options: {
            reporters: {
                console: [{
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                        response: '*',
                        log: '*'
                    }]
                }, {
                    module: 'good-console'
                }, 'stdout']
            }
        }
    }, (err) => {

        if (err) {
            throw err; // something bad happened loading the plugin
        }

        server.start((err) => {

            if (err) {
                throw err;
            }
            server.log('info', 'Server running at: ' + server.info.uri);
        });
    });
}
