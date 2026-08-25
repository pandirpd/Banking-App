class ParaBankHomePage {
  constructor(page) {
    this.page = page;

    this.accountOverviewLink = page.getByRole('link', {
      name: 'Accounts Overview',
    });

    this.accountOverviewHeader = page.getByRole('heading', {
      name: 'Accounts Overview',
    });
  }

  async openAccountOverview() {
    await this.accountOverviewLink.click();
  }
}

module.exports = ParaBankHomePage;