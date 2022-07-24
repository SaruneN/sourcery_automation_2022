// @ts-check
const { test, expect } = require('@playwright/test');
const { CalculatorPage } = require('../pages/CalcultatorPage');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Concatenating 2 and 3 results in 23', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);

      await calculatorPage.navigate();
      await calculatorPage.getVersion(version);
      await calculatorPage.click('#number1Field');
      await calculatorPage.fillField('#number1Field', '2');
      await calculatorPage.click('#number2Field');
      await calculatorPage.fillField('#number2Field', '3');
      await calculatorPage.selectOption('select[name="selectOperation"]', '4');
      await calculatorPage.click('#calculateButton');

      await expect(page.locator('#numberAnswerField')).toHaveValue('23');
    });
  });

  test.describe(version + ': Add', () => {
    test('Adding 1 and 3 results in 4', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);

      await calculatorPage.navigate();
      await calculatorPage.getVersion(version);
      await calculatorPage.click('#number1Field');
      await calculatorPage.fillField('#number1Field', '1');
      await calculatorPage.click('#number2Field');
      await calculatorPage.fillField('#number2Field', '3');
      await calculatorPage.selectOption('select[name="selectOperation"]', '0');
      await calculatorPage.click('#calculateButton');

      await expect(page.locator('#numberAnswerField')).toHaveValue('4');
    })
  });

  test.describe(version + ': Add', () => {
    test('Subtracting 1 out of 3 resultns in 2', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);

      await calculatorPage.navigate();
      await calculatorPage.getVersion(version);
      await calculatorPage.click('#number1Field');
      await calculatorPage.fillField('#number1Field', '3');
      await calculatorPage.click('#number2Field');
      await calculatorPage.fillField('#number2Field', '1');
      await calculatorPage.selectOption('select[name="selectOperation"]', '1');
      await calculatorPage.click('#calculateButton');

      await expect(page.locator('#numberAnswerField')).toHaveValue('2');
    })
  });

  test.describe(version + ': Add', () => {
    test('Multiplying 2 and 3 resultns in 6', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);

      await calculatorPage.navigate();
      await calculatorPage.getVersion(version);
      await calculatorPage.click('#number1Field');
      await calculatorPage.fillField('#number1Field', '2');
      await calculatorPage.click('#number2Field');
      await calculatorPage.fillField('#number2Field', '3');
      await calculatorPage.selectOption('select[name="selectOperation"]', '2');
      await calculatorPage.click('#calculateButton');

      await expect(page.locator('#numberAnswerField')).toHaveValue('6');

    })
  });

  test.describe(version + ': Add', () => {
    test('Dividing 6 out of 2 resultns in 3', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);

      await calculatorPage.navigate();
      await calculatorPage.getVersion(version);
      await calculatorPage.click('#number1Field');
      await calculatorPage.fillField('#number1Field', '6');
      await calculatorPage.click('#number2Field');
      await calculatorPage.fillField('#number2Field', '2');
      await calculatorPage.selectOption('select[name="selectOperation"]', '3');
      await calculatorPage.click('#calculateButton');

      await expect(page.locator('#numberAnswerField')).toHaveValue('3');
    })
  });

  test.describe(version + ': Add', () => {
    test('Dividing 2.2 out of 1.5 resultns in 1.4666666666', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);

      await calculatorPage.navigate();
      await calculatorPage.getVersion(version);
      await calculatorPage.click('#number1Field');
      await calculatorPage.fillField('#number1Field', '2.2');
      await calculatorPage.click('#number2Field');
      await calculatorPage.fillField('#number2Field', '1.5');
      await calculatorPage.selectOption('select[name="selectOperation"]', '3');
      await calculatorPage.click('#calculateButton');

      await expect(page.locator('#numberAnswerField')).toHaveValue('1.46666666');
    })
  });

  test.describe(version + ': Add', () => {
    test('Dividing empty field results in error', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);

      await calculatorPage.navigate();
      await calculatorPage.getVersion(version);
      await calculatorPage.click('#number1Field');
      await calculatorPage.fillField('#number1Field', '');
      await calculatorPage.click('#number2Field');
      await calculatorPage.fillField('#number2Field', '');
      await calculatorPage.selectOption('select[name="selectOperation"]', '3');
      await calculatorPage.click('#calculateButton');

      let errorMessage = await page.$('#errorMsgField');

      expect(await errorMessage?.textContent()).toEqual('Divide by zero error!');
    })
  });

  test.describe(version + ': Add', () => {
    test('Dividing 6 out of 0 resultns in error', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);

      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await calculatorPage.navigate();
      await calculatorPage.getVersion(version);
      await calculatorPage.click('#number1Field');
      await calculatorPage.fillField('#number1Field', '6');
      await calculatorPage.click('#number2Field');
      await calculatorPage.fillField('#number2Field', '0');
      await calculatorPage.selectOption('select[name="selectOperation"]', '3');
      await calculatorPage.click('#calculateButton');

      let errorMessage = await page.$('#errorMsgField');

      expect(await errorMessage?.textContent()).toEqual('Divide by zero error!');
    })
  });

  test.describe(version + ': Add', () => {
    test('Adding a and b resultns in error "Number 1 is not a number"', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);

      await calculatorPage.navigate();
      await calculatorPage.getVersion(version);
      await calculatorPage.click('#number1Field');
      await calculatorPage.fillField('#number1Field', 'a');
      await calculatorPage.click('#number2Field');
      await calculatorPage.fillField('#number2Field', 'b');
      await calculatorPage.selectOption('select[name="selectOperation"]', '0');
      await calculatorPage.click('#calculateButton');

      let errorMessage = await page.$('#errorMsgField');

      expect(await errorMessage?.textContent()).toEqual('Number 1 is not a number');
    })
  });
})