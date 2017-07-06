import moment from 'moment';
import uuid from 'node-uuid';

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];

    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    case 'UPDATE_TODO':

      return state.map((todo) => {

        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          }
        } else {
          return todo;
        }
      });
    default:
      return state;
  }

};

export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {uid: action.uid}

    case 'LOGOUT':
      return {}
    default:
      return state;

  }
}
