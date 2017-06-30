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
}
