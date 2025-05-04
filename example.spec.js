const { test, expect } = require('@playwright/test');

const URL = "https://demoqa.com";
const TITLE = 'DEMOQA';

const FormPage = require('./FormPage');
const Person = require('./Person');
const { STATUS_CODES } = require('http');
const user = new Person("Dzmitry", "Karpuk", "3211234567", true);


test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.open = () => {}; // Отключает всплывающие окна
  });
});

test('Заполнение формы', async ({ page }) => { 
  const formPage = new FormPage(page);
  await page.goto(`${URL}/automation-practice-form`);
  const title = await page.title();
  expect(title).toBe(TITLE);
  await formPage.fillName(user.name);
  await formPage.fillLastName(user.lastName);
  await formPage.fillGender(user.isMale);
  await formPage.fillPhone(user.phoneNumber);

  const [response] = await Promise.all([
    page.waitForResponse(response => response.status() === 200),
    formPage.submitForm()
  ]);
  expect(response.status()).toBe(200);
});


