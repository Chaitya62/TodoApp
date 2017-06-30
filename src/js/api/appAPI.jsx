import $ from 'jquery/dist/jquery.min.js';

export default class AppAPI {
  static setTodos(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  }
  static getTodos() {
    var strTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(strTodos);
    } catch (e) {
      console.log(e);
    }

    if ($.isArray(todos)) {
      return todos;
    }
    return [];
  }

  static filterTodos(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filer by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filer by search text
    filteredTodos = filteredTodos.filter((todo) => {
      return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) !== -1;
    });

    // sort todos with non complted first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {

        return 0;
      }
    });

    return filteredTodos;
  }
}
