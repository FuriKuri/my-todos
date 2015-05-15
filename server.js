#!/usr/bin/env node
'use strict';

var Hapi = require('hapi');
var Persistor = require('./lib/persistor');
var storage = new Persistor();

var server = new Hapi.Server();
server.connection({ 
  port: 8080
});

server.route({
  method: 'GET',
  path: '/{list}',
  handler: function(request, reply) {
    var list = request.params.list;
    storage.load(list)
      .then(todos => reply(JSON.parse(todos.toJson())))
      .catch(err => console.log('Fehler: ' + err));
  }
});

// Start the server
server.start();
console.log('Server started');