const { test, expect } = require('@playwright/test');
const person = require('./User');

test('Заполнение формы', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.addInitScript(() => {
    window.open = () => {}; // Отключает всплывающие окна
  });
  const title = await page.title();
  expect(title).toBe('DEMOQA');
  await page.fill("#firstName", person.name);
  await page.fill("#lastName", person.lastName);
  await page.click("//label[@for='gender-radio-1']");
  await page.fill("#userNumber", person.phoneNumber);
  await page.click("#submit");
  //await page.pause();
});

