import { DrawDispatchPage } from './app.po';

describe('draw-dispatch App', () => {
  let page: DrawDispatchPage;

  beforeEach(() => {
    page = new DrawDispatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dd works!');
  });
});
