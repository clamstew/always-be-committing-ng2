import { AlwaysBeCommittingNg2Page } from './app.po';

describe('always-be-committing-ng2 App', function() {
  let page: AlwaysBeCommittingNg2Page;

  beforeEach(() => {
    page = new AlwaysBeCommittingNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
