import { PeggingUIPage } from './app.po';

describe('pegging-ui App', function() {
  let page: PeggingUIPage;

  beforeEach(() => {
    page = new PeggingUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
