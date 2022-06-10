
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Choices div is displayed when DRAW button is clicked', async  ()=> {
    await driver.findElement(By.id("draw")).click();
    let choices = await driver.findElement(By.xpath('//div[@id="choices"]')).isDisplayed()
    expect(choices).toBe(true)
})

test('Player-duo div displays when Add to duo is clicked', async  ()=> {
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.xpath('//button[contains(@class, "bot-btn")]')).click();
    let duo = await driver.findElement(By.xpath('//div[@id="player-duo"]')).isDisplayed()
    expect(duo).toBe(true)
});