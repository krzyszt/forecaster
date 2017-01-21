import { ForecasterPage } from './app.po';

describe('forecaster App', function() {
  let page: ForecasterPage;

  beforeEach(() => {
    page = new ForecasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
