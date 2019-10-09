var express = require('express');
var router = express.Router();

const {By, Builder, Key, until} = require('selenium-webdriver');

const handleBaiDuDriver = async () => {
    let title = '';
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://www.baidu.com');

        await driver.findElement(By.id('kw')).sendKeys('webdriver', Key.RETURN);//正常使用

        await driver.findElement(By.id('su')).click();

        await driver.wait(until.titleIs('百度一下，你就知道'), 3000);

        title = await driver.getTitle();

        console.log(`title: ${title}`);
    } catch (error) {
        console.log(error)
    } finally {
        await driver.sleep(2000);
        await driver.quit();
    }
    return title
}

router.get('/', async function(req, res, next) {
  const title = await handleBaiDuDriver();
  res.send({ title });
});

module.exports = router;
