import { Selector } from 'testcafe';
import { environment } from '../config/environment';

fixture `Wordle e2e tests`
  .page(environment.baseUrl);
 
test
.meta('testId', 'TC-1')
('Check the application title', async t => {
  const appTitle = Selector('div')
    .withAttribute('class', 'title');

  await t.expect(appTitle.textContent).eql(' My Wordle ');
});

test
.meta('testId', 'TC-2')
('Should not allow invalid word', async t => {
  const infoMsg = Selector('div')
    .withAttribute('class', 'info-msg');
    // .withText(' Not in word list '); // Not stable to check transient message.

  await t.pressKey('a a a a a enter');
  await t.expect(infoMsg.exists).ok();
  const { log } = await t.getBrowserConsoleMessages();
  await t.expect(log[log.length-1]).eql('Not in word list');
});

test
.meta('testId', 'TC-3')
('Should allow valid word', async t => {
  await t.pressKey('a p p l e enter');
  const { log } = await t.getBrowserConsoleMessages();
  await t.expect(log[log.length-1]).match(/[012]\,[012]\,[012]\,[012]\,[012]/); // Log when input is valid
});