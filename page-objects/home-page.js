/* eslint-disable class-methods-use-this */
import { Selector, t } from 'testcafe';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

class HomePage {
  get btnAdd() { return Selector('#index > div > div > div'); }

  async addAnItem() {
    await t
      .wait(1000)
      .click(this.btnAdd)
      .wait(1000);
  }
}

export default new HomePage();
