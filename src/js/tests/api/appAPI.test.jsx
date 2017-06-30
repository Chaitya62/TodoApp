import expect from 'expect';

import AppAPI from 'appAPI';

describe('AppAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(AppAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [
        {
          id: 23,
          text: 'Test all files',
          completed: false
        }
      ];
      AppAPI.setTodos(todos);
      var actualtodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualtodos).toEqual(todos);

    });
    it('should not set invalid todos array', () => {

      var badTodos = {
        a: 'bad data'
      };
      AppAPI.setTodos(badTodos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toBe(null);

    });

  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      var badTodos = {
        a: 'bad data'
      };
      localStorage.setItem('todos', JSON.stringify(badTodos));
      var todos = AppAPI.getTodos();
      expect(todos).toEqual([]);
    })

    it('should return todos if valid array in localtStorage', () => {
      var todos = [
        {
          id: 23,
          text: 'Test all files',
          completed: false
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = AppAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    })
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'Test all files',
        completed: true
      }, {
        id: 2,
        text: 'other text',
        completed: false
      }, {
        id: 3,
        text: 'Whatttt is this',
        completed: true
      }
    ];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = AppAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should not return all items if showCompleted is false', () => {
      var filteredTodos = AppAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = AppAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
      expect(filteredTodos[0].completed).toBe(false);

    });

    it('should return all  todos when searchText is empty', () => {
      var filteredTodos = AppAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should filter by searchText', () => {
      var filteredTodos = AppAPI.filterTodos(todos, true, 'te');
      expect(filteredTodos.length).toBe(2);
      filteredTodos = AppAPI.filterTodos(todos, true, 'this');
      expect(filteredTodos.length).toBe(1);
      filteredTodos = AppAPI.filterTodos(todos, true, 'nothing will match this');
      expect(filteredTodos.length).toBe(0);

    });

  })

});
