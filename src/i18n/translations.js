// eslint-disable-next-line
var merge = require('deepmerge');

// translate:start
const transca = require('../components/App/translate/locale-ca').translate;
const transen = require('../components/App/translate/locale-en').translate;
const transes = require('../components/App/translate/locale-es').translate;
const trans = {
  ca: transca,
  en: transen,
  es: transes
};
// translate:end

// eslint-disable-next-line
export const translate = trans;

export default trans;
