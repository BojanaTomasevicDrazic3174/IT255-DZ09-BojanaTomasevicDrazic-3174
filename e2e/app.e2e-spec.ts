import { BimHotelPage } from './app.po';

describe('bim-hotel App', function() {
  let page: BimHotelPage;

  beforeEach(() => {
    page = new BimHotelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
