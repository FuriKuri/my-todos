function Printer() {
  this.print = function(todos) {
    console.log(todos.header());
    todos.forEach(item => console.log("* " + item));
  }
}

module.exports = Printer;