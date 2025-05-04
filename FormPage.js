class FormPage {
    constructor(page) {
      this.page = page;
      this.name = page.locator("#firstName");
      this.lastName = page.locator("#lastName");
      this.genderMale = page.locator("//label[@for='gender-radio-1']");
      this.genderFemale = page.locator("//label[@for='gender-radio-2']");
      this.phoneNumber = page.locator("#userNumber");
      this.submitButton = page.locator("#submit");
    }

    async fillName(firstName) {
      await this.name.fill(firstName);
    }

    async fillLastName(lastName) {
      await this.lastName.fill(lastName);
    }

    async fillGender(isMale) {
      await (isMale ? this.genderMale.click() : this.genderFemale.click());
    }
    
    async fillPhone(phone) {
      await this.phoneNumber.fill(phone);
    }

    async submitForm() {
      await this.submitButton.click();
    }
}
module.exports = FormPage;