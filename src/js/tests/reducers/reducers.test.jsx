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

});
