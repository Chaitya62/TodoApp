import expect from 'expect';
import * as reducers from 'reducers';
import df from 'deep-freeze-strict';

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Searching stuff'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    })
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      var res = reducers.showCompletedReducer(undefined, df(action));
      expect(res).toBe(true);
      res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toBe(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'something todo',
          completed: false,
          createdAt: 23524
        }
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toBe(1);
      expect(res[0]).toBe(action.todo);
    });

    it('should toggle todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 11
      };
      var todoData = [
        {
          id: 11,
          text: 'Test features',
          completed: false,
          createdAt: 0,
          completedAt: undefined
        }
      ];

      var res = reducers.todosReducer(df(todoData), df(action));
      expect(res[0].completed).toBe(!todoData[0].completed);
      expect(res[0].completedAt).toBeA('number');
    });
  });

});
