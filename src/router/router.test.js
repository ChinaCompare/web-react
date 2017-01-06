import expect from 'expect';

import router from './';

describe('Router', () => {
  it('should load router', () => {
    expect(router).toExist();
  });
});
