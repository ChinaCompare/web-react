var path = require('path');
var find = require('find');
var fs = require('fs');
var chalk = require('chalk');

const TAG_START = '// translate:start';
const TAG_END = '// translate:end';
const basepath = 'i18n';

const transfiles = path.resolve(__dirname, '../src') + path.sep;
const destfile = path.resolve(__dirname, `../src/${basepath}/translations.js`);

const injectTranslates = () => {
  find.file(/\/locale-[a-z]{2}\.json$/, transfiles, function (files) {
    const listtrans = {};
    files.forEach(function (f) {
      var file = f.replace(transfiles, '');
      if (file.indexOf(basepath) == 0) {
        const reg = new RegExp(`^${basepath}${path.sep}`, 'i');
        file = `.${path.sep}${file.replace(reg, '')}`;
      } else {
        file = `..${path.sep}${file}`;
      }
      // const total = file.replace(/\.json$/, '');
      const lang = file.replace(/\.json$/, '').split('-')[1];
      if (!listtrans.hasOwnProperty(lang)) {
        listtrans[lang] = [];
      }
      listtrans[lang].push(file);
    });
    setnewContent(listtrans);
  });
};

const addNewTranslate = function (list, files) {
  const VARNAME = 'trans';
  const MERGE_FUNCT = 'merge.all';
  Object.keys(files).forEach(function (key) {
    if (files[key].length > 1) {
      list.push(`const trans${key} = ${MERGE_FUNCT}([`);
      files[key].forEach(function (f, i, array) {
        const comma = i === array.length - 1 ? '' : ',';
        list.push(`  require('${f}')${comma}`);
      });
      list.push(']);');
    } else {
      const f = files[key][0];
      list.push(`const trans${key} = require('${f}');`);
    }
  });
  list.push(`const ${VARNAME} = {`);
  Object.keys(files).forEach(function (key, i, array) {
    const comma = i === array.length - 1 ? '' : ',';
    list.push(`  ${key}: ${VARNAME}${key}${comma}`);
  });
  list.push('};');
  return list;
};
const setnewContent = (listfiles) => {
  const content = fs.readFileSync(destfile, 'utf8');
  var newcontent = [];
  var start = false;
  content.split('\n').forEach(function (c) {
    if (!start && c == TAG_START) {
      start = true;
      newcontent.push(c);
      newcontent = addNewTranslate(newcontent, listfiles);
    } else if (start && c == TAG_END) {
      start = false;
      newcontent.push(c);
    } else if (!start) {
      newcontent.push(c);
    }
  });
  fs.open(destfile, 'w', function (e, id) {
    fs.write(id, newcontent.join('\n'), null, 'utf8', function () {
      fs.close(id, function () {
        console.log(chalk.green('[?] ' + destfile.split(path.sep).pop() + ' created'));
      });
    });
  });
};

if (require.main === module) {
  injectTranslates();
} else {
  module.exports = injectTranslates;
}
