import { JuliensergentPage } from './app.po';

describe('juliensergent App', () => {
  let page: JuliensergentPage;

  beforeEach(() => {
    page = new JuliensergentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
