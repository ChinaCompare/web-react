import expect from 'expect';

import translations from './translations';

describe('Translations', () => {
  it('should load translations', () => {
    expect(translations).toExist();
  });
  it('should have translations for english', () => {
    expect(translations.en.messages).toExist();
  });
  it('should have translations for spanish', () => {
    expect(translations.es.messages).toExist();
  });
  it('should have translations for catalan', () => {
    expect(translations.ca.messages).toExist();
  });
});
