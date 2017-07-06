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
      expect(res[0]).toEqual(action.todo);

    });

    it('should add new todos', () => {
      var action = {
        type: 'ADD_TODOS',
        todos: [
          {
            id: 'abc123',
            text: 'something todo',
            completed: false,
            createdAt: 23524
          }
        ]
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toBe(action.todos.length);
      expect(res).toEqual(action.todos);
    });

    it('should update todo', () => {

      var updates = {
        completed: false,
        completedAt: null
      }
      var todoData = [
        {
          id: 11,
          text: 'Test features',
          completed: true,
          createdAt: 0,
          completedAt: 10023
        }
      ];
      var action = {
        type: 'UPDATE_TODO',
        id: todoData[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todoData), df(action));
      expect(res[0].completed).toBe(updates.completed);
      expect(res[0].completedAt).toBe(updates.completedAt);
      expect(res[0].text).toEqual(todoData[0].text);
    });
  });

  describe('authReducer', () => {
    it('should set auth uid on login', () => {
      var action = {
        type: 'LOGIN',
        uid: '123asdfvdf3'
      };
      var res = reducers.authReducer(df({}), df(action));
      expect(res.uid).toBe(action.uid);
      expect(res).toInclude({uid: action.uid});
    });

    it('should unset auth uid on logout', () => {
      var action = {
        type: 'LOGOUT'
      };
      var authState = {
        uid: '1234dfd'
      }
      var res = reducers.authReducer(df(authState), df(action));
      expect(res.uid).toBeA('undefined');
      expect(res).toEqual({});
    });

  });

});
