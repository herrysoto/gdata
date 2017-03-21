import { GdataPage } from './app.po';

describe('gdata App', () => {
  let page: GdataPage;

  beforeEach(() => {
    page = new GdataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
