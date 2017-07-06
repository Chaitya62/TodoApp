import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import {showCompletedReducer, searchTextReducer, todosReducer, authReducer} from 'reducers';
import thunk from 'redux-thunk';

export var configure = (initialState = {}) => {
  var reducers = combineReducers({todos: todosReducer, showCompleted: showCompletedReducer, searchText: searchTextReducer, auth: authReducer});
  var store = createStore(reducers, initialState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
  return store;
};
