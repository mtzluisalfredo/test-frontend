/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import HomePage from '../page-objects/home-page';

const URL = (process.env.BASE_URL || '').replace(/\/$/, '');


fixture('Challenge')
  .page(URL);

test('Add the first item', async t => {
  await HomePage.addAnItem();
});
