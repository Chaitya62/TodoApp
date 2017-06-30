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

});
