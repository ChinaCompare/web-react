import expect from 'expect';
import df from 'deep-freeze-strict';

import * as reducers from './reducers';
import * as act from '../actions/actionslist';

describe('Reducers', () => {
  describe('testReducer', () => {
    it('should return true in default', () => {
      const action = {
        type: act.TOGGLE_TEST
      };
      const res = reducers.testReducer(df(''), df(action));

      expect(res).toEqual(true);
    });
    it('should return oposite boolean', () => {
      const action = {
        type: act.TOGGLE_TEST
      };
      const statetrue = true;
      const restrue = reducers.testReducer(df(statetrue), df(action));
      expect(restrue).toBe(!statetrue);

      const statefalse = false;
      const resfalse = reducers.testReducer(df(statefalse), df(action));
      expect(resfalse).toBe(!statefalse);
    });
  });
});
