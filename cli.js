#!/usr/bin/env node
'use strict';
var meow = require('meow');
var app = require('./lib/app');

var cli = meow({
  help: [
    'Usage',
    '  cli.js add <name> <item>',
    '  cli.js rm <name> <item>',
    '  cli.js ls <name>'
  ].join('\n')
});

app(cli.input[0], cli.input[1], cli.input[2]);