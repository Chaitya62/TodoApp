import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import {showCompletedReducer, searchTextReducer, todosReducer} from 'reducers';
import thunk from 'redux-thunk';

export var configure = (initialState = {}) => {
  var reducers = combineReducers({todos: todosReducer, showCompleted: showCompletedReducer, searchText: searchTextReducer});
  var store = createStore(reducers, initialState, applyMiddleware(thunk), compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
  return store;
};
