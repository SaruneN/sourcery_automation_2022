class CalculatorPage {

  constructor(page) {
    this.page = page;
  }
  async navigate() {
    await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
  }

  async getVersion(version) {
    await this.page.selectOption('#selectBuild', { label: version });
  }

  async click(element) {
    await this.page.locator(element).click();
  }

  async fillField(field, value) {
    await this.page.locator(field).fill(value);
  }

  async selectOption(element, option) {
    await this.page.locator(element).selectOption(option);
  }
}

module.exports = { CalculatorPage };