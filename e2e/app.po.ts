import { browser, element, by } from 'protractor';

export class DrawDispatchPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dd-root h1')).getText();
  }
}
