'use strict';

describe('Todos', function() {
  var Todo = require('../lib/todo');
  it('A new todo list is empty', function() {
    var todo = new Todo('My List');
    expect(todo.size()).toBe(0);
  });
});