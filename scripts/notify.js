const child_process = require('child_process');


const shouldNotify = () => {
  return process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID && process.env.TRAVIS_PULL_REQUEST !== 'false' && process.env.TRAVIS_TEST_RESULT && parseInt(process.env.TRAVIS_TEST_RESULT, 10) === 0;

};

const buildMessage = () => {

  const branch = process.env.TRAVIS_PULL_REQUEST_BRANCH;
  const projectName = require('../package.json').name;
  const repository = require('../package.json').repository.url;
  const prUrl = `${repository}/pull/${process.env.TRAVIS_PULL_REQUEST}`;

  return `*${projectName}* Pending Review for branch [${branch}](${prUrl})`;
};

if (shouldNotify()) {


  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;

  const message = buildMessage();

  const chatId = process.env.TELEGRAM_CHAT_ID;

  console.log('Notifying telegram');

  child_process.execSync(`curl -g -XGET "https://api.telegram.org/bot${telegramToken}/sendMessage?text=${message}&chat_id=${chatId}&parse_mode=markdown"`);

  process.exit();

} else {
  console.log('Not notifying on telegram');
}
