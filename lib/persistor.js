var fs = require('fs');
var Todo = require('./todo');

function Persistor() {
  this.save = function(todo) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(todo.name, todo.toJson(), function (err) {
        if (err) 
          reject(err);
        else
          resolve('It\'s saved!');
      });
    });
  }

  this.load = function(todo) {
    return new Promise(function(resolve, reject) {
      fs.readFile(todo, function (err, data) {
        if (err) 
          reject(err);
        else
          resolve(Todo.fromJson(data));
      });
    });
  }
}

module.exports = Persistor;