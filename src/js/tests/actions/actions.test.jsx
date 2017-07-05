import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import firebase, {firebaseRef} from 'app/firebase';
import * as actions from 'actions';

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate searchText action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Something that i searched'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);

  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: 'abc123',
        text: 'anything we like',
        completedAt: false,
        createdAt: 0
      }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should generate toggle showCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '12',
      updates: {
        completed: false
      }
    };
    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });

  it('should generate ADD_TODOS action', () => {
    var action = {
      type: 'ADD_TODOS',
      todos: [
        {
          id: 'abc123',
          completedAt: null,
          createdAt: 123454,
          completed: false,
          text: 'LOL this is great'
        }
      ]
    };
    var res = actions.addTodos(action.todos);
    expect(res).toEqual(action);
  });

  it('should create todo and dispatch add todo', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store
      .dispatch(actions.startAddTodo(todoText))
      .then(() => {
        const action = store.getActions();
        expect(action[0]).toInclude({type: 'ADD_TODO'});
        expect(action[0].todo).toInclude({text: todoText});
        done();
      })
      .catch(done);

  });

  describe('Tests with firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');
      todosRef
        .remove()
        .then(() => {
          testTodoRef = firebaseRef
            .child('todos')
            .push();
          testTodoRef.set({text: 'Something to do', completed: false, createdAt: 2435})
        })
        .then(() => done())
        .catch(done);
    });

    afterEach((done) => {
      testTodoRef
        .remove()
        .then(() => done());
    });

    it('should toggle todo and dispatch update todo action', (done) => {
      const store = createMockStore();
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store
        .dispatch(action)
        .then(() => {
          const mockActions = store.getActions();

          expect(mockActions[0]).toInclude({type: 'UPDATE_TODO', id: testTodoRef.key});
          expect(mockActions[0].updates).toInclude({completed: true});
          expect(mockActions[0].updates.completedAt).toBeA('number');
          done();
        })
        .catch(() => done());
    });

    it('should return the todos from firebase', (done) => {
      const store = createMockStore();
      const action = actions.startAddTodos();

      store
        .dispatch(action)
        .then(() => {
          const mockActions = store.getActions();
          expect(mockActions[0].type).toEqual('ADD_TODOS');
          expect(mockActions[0].todos.length).toBe(1);
          expect(mockActions[0].todos[0]).toInclude({id: testTodoRef.key, text: 'Something to do', completed: false, createdAt: 2435});
          expect(mockActions[0].todos[0].text).toBe('Something to do');
          done();
        })
        .catch(done);

    })

  });

});
