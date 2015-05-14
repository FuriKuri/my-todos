var Todo = require('./todo');
var Persistor = require('./persistor');
var Printer = require('./printer');
var storage = new Persistor();

function ls(name) {
  storage.load(name)
    .then(todos => new Printer().print(todos))
    .catch(err => console.log('Fehler: ' + err));
}

function add(name, item) {
  storage.load(name)
    .then(todos => { 
      todos.add(item);
      return storage.save(todos);
    })
    .then(msg => console.log(msg))
    .catch(err => console.log('Fehler: ' + err));
}

function rm(name, item) {
  storage.load(name)
    .then(todos => { 
      todos.remove(item);
      return storage.save(todos);
    })
    .then(msg => console.log(msg))
    .catch(err => console.log('Fehler: ' + err));
}

var cmds = {
  ls: ls,
  rm: rm,
  add: add
}

module.exports = function(cmd, name, item) {
  cmds[cmd](name, item);
}