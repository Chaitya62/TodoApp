import expect from 'expect';
import * as actions from 'actions';

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
      text: 'lol'
    };
    var res = actions.addTodo(action.text);
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
});
