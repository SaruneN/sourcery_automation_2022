class SearchResultsPage {

    constructor(page) {
      this.page = page;
    }  

    async getMainLinkAttributeFromResult(resultIndex) {
        return await this.page.locator(`#r1-${resultIndex - 1} h2 a`).getAttribute('href');
    }

    async getQuertyInputText(){
        return this.page.locator('imput[name=q]').getAttribute('value');
    }
}

module.exports = { SearchResultsPage };

