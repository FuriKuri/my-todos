'use strict';

describe('Todos', function() {
  var Todo = require('../lib/todo');

  it('A new todo list is empty', function() {
    var todo = new Todo('My List');
    expect(todo.size()).toBe(0);
  });

  it('A todo list has a name', function() {
    var todo = new Todo('My List');
    expect(todo.name).toBe('My List');
  });

  it('Items can be added to a todo list', function() {
    var todo = new Todo('My List');
    todo.add('Something todo');
    expect(todo.contains('Something todo')).toBe(true);
  });

  it('Items can be removed from a todo list', function() {
    var todo = new Todo('My List');
    todo.add('Something todo');
    todo.remove('Something todo');
    expect(todo.contains('Something todo')).toBe(false);
  });
});