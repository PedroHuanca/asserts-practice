module.exports = {
    '@tags': ['assertions'],
    'Demo test assertions': function (browser) {

        const developerGuideTab = '#navigation > ul > li:nth-child(2) > a';
        const searchButton = '#docsearch > button';
        const searchCriteria = 'Asserts';
        const searchInput = '[id="docsearch-input"]';
        const firstItem = '#docsearch-item-0 > a > div';
        const blogTab = '#navbartop > ul > li:nth-child(5) > a';
        const expectedFooterText = "Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.";
        const footerText = "[class='address']";
        browser
            .windowMaximize()
            .url('https://nightwatchjs.org/')
            .waitForElementVisible('body')
            .click(developerGuideTab)
            .click(searchButton)
            .setValue(searchInput, searchCriteria)
            .click(firstItem)
            .click(blogTab)
            .assert.textContains(footerText, expectedFooterText)
        browser.end();
    }
};