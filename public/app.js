/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.test = 'test'
    todoList.book = []
    todoList.add = function (id, name, price) {
      // console.log(id, name, price)
      console.log(todoList.book)
      var obj = {
        'id': id,
        'name': name,
        'price': price
      }
      // todoList.book.push(obj)
      // console.log(todoList.book)
      if (todoList.book.length === 0) {
        obj.sumbook = 1
        todoList.book.push(obj)
      } else {
        var check = false
        for (var i = 0; i < todoList.book.length; i++) {
          if (todoList.book[i].id === id) {
            check = true
            todoList.book[i].sumbook += 1
          }
        }
      }
      if (check === false) {
        obj.sumbook = 1
        todoList.book.push(obj)
      }
    }
  })
