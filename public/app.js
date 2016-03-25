/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.test = 'test'
    todoList.book = []
    todoList.discountTotal = 0
    todoList.add = function (id, name, price) {
      // console.log(id, name, price)
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
      console.log(todoList.book)
      var book = todoList.book
      todoList.discountTotal = todoList.discount(book)
      console.log(todoList.discountTotal)
    }
    var filterData = function (array) {
      return array.filter((element) => element.sumbook !== 0)
    }
    todoList.discount = function (book) {
      var items = book.map((obj) => {
        return { sumbook: obj.sumbook, price: obj.price }
      })
      var totalDis = 0
      while (items.length > 1) {
        var sumprice = items.reduce((sum, item) => sum + item.price, 0)
        totalDis += ((items.length - 1) / 10) * sumprice
        items = items.map((obj) => {
          return { sumbook: obj.sumbook - 1, price: obj.price }
        })
        items = filterData(items)
      }
      console.log(totalDis)
      return totalDis
    }
  })
