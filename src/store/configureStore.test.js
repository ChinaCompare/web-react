import expect from 'expect';
import configure from './configureStore';

describe('ConfigureStore', () => {
  it('should load configureStore', () => {
    const store = configure();
    expect(store).toExist();
  });
});
