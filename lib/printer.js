'use strict';

function Printer() {
  this.print = function(todos) {
    console.log(todos.header());
    for(let todo of todos) {
      console.log(todo);
    }
  }
}

module.exports = Printer;