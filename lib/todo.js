function Todo(name) {
  this.name = name;
  var todos = [];

  function contains(item) {
    return todos.indexOf(item) !== -1;
  }

  this.contains = function(todo) {
    return contains(todo);
  };

  this.size = function() {
    return todos.length;
  };

  this.add = function (todo) {
    if (!contains(todo)) {
      todos.push(todo);
    }
  };

  this.remove = function (todo) {
    var index = todos.indexOf(todo);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  };

  this.toJson = function() {
    return JSON.stringify({
      todos: todos,
      name: name
    });
  };


  this.header = function() {
    return '--- ' + this.name + ' ----';
  }
}

Todo.fromJson = function(json) {
  var data = JSON.parse(json);
  var todo = new Todo(data.name);
  data.todos.forEach(function(item) {
    todo.add(item);
  });
  return todo;
}

module.exports = Todo;