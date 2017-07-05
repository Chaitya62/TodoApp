import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

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

  it('should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '12'
    };
    var res = actions.toggleTodo(action.id);
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

});
