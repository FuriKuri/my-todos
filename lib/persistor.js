var fs = require('fs');
var Todo = require('./todo');

function Persistor() {
  this.save = function(todo, cb) {
    fs.writeFile(todo.name, todo.toJson(), function (err) {
      if (err) throw err;
      cb('It\'s saved!');
    });
  }

  this.load = function(todo, cb) {
    fs.readFile(todo, function (err, data) {
      if (err) throw err;
      cb(Todo.fromJson(data));
    });
  }
}

module.exports = Persistor;