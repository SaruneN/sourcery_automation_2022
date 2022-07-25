const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');

test.describe('Search', () => {
    test('First result should contain devbridge.com', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');

        let searchResultsPage = new SearchResultsPage(page);
        let text = await searchResultsPage.getMainLinkAttributeFromResult(1);

        expect(text).toContain('devbridge.com');
    });

    test('Fourth result should contain linkedin.com', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');

        let searchResultsPage = new SearchResultsPage(page);
        let text = await searchResultsPage.getMainLinkAttributeFromResult(4);

        expect(text).toContain('linkedin.com');
    });

    test('Search query should be auto plopulated in Results page', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');

        let searchResultsPage = new SearchResultsPage(page);
        let text = await searchResultsPage.getQuertyInputText();

        expect(text).toEqual('devbridge');
    });
});
