import {combineReducers, createStore, compose} from 'redux';
import {showCompletedReducer, searchTextReducer, todosReducer} from 'reducers';

export var configure = () => {
  var reducers = combineReducers({todos: todosReducer, showCompleted: showCompletedReducer, searchText: searchTextReducer});

  var store = createStore(reducers, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
  return store;
};
