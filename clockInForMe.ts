/* clock in, text providers
use selenium tool to interface with chrome

1. open chrome
2. go to url (amion.com)
3. login (STFMD)
4. scan page for "hospitalist swing", get name(s) associated with that/those line(s)

1. open chrome
2. go to url (workday.com)
3. login
4. navigate to Time page
5. clock in, with provider name from above

1. open messages
2. search for providers names from above
3. text them

*/


const { Builder, By, Key, until } = require('selenium-webdriver');

async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();  // start session

    await driver.get('https://www.google.com');  // navigate to site

    await driver.getTitle(); // get info about site

    let searchBox = await driver.findElement(By.name('q'));  // find a couple elements 
    let searchButton = await driver.findElement(By.name('btnK'));

    await searchBox.sendKeys('Selenium');  // effect a couple elements 
    await searchButton.click();

    await driver.findElement(By.name('q')).getAttribute("value"); // get info about element 

    await driver.quit(); // end session
}
helloSelenium();






