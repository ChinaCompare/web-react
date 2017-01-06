// eslint-disable-next-line
var merge = require('deepmerge');

// translate:start
const transca = require('../components/App/translate/locale-ca.json');
const transen = require('../components/App/translate/locale-en.json');
const transes = require('../components/App/translate/locale-es.json');
const trans = {
  ca: transca,
  en: transen,
  es: transes
};
// translate:end

// eslint-disable-next-line
export const translate = trans;

// eslint-disable-next-line
export default trans;
