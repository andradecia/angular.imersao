import { Angular.ImersaoPage } from './app.po';

describe('angular.imersao App', () => {
  let page: Angular.ImersaoPage;

  beforeEach(() => {
    page = new Angular.ImersaoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
