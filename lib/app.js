var Todo = require('./todo');
var Persistor = require('./persistor');
var Printer = require('./printer');
var storage = new Persistor();

function ls(name) {
  storage.load(name, function(result) {
    new Printer().print(result);
  });
}

function add(name, item) {
  storage.load(name, function(todos) {
    todos.add(item);
    storage.save(todos, function(msg) {
      console.log(msg);
    });
  });
}

function rm(name, item) {
  storage.load(name, function(todos) {
    todos.remove(item);
    storage.save(todos, function(msg) {
      console.log(msg);
    });
  });
}

var cmds = {
  ls: ls,
  rm: rm,
  add: add
}

module.exports = function(cmd, name, item) {
  cmds[cmd](name, item);
}