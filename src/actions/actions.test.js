import expect from 'expect';

import * as actions from './actions';
import * as act from './actionslist';

describe('Actions', () => {
  it('should get TOGGLE_TEST in actionlist', () => {
    expect(act.TOGGLE_TEST).toEqual('TOGGLE_TEST');
  });
  it('should generate toggle test action', () => {
    const action = {
      type: act.TOGGLE_TEST
    };
    const res = actions.toggleTest();
    expect(res).toEqual(action);
  });
});
