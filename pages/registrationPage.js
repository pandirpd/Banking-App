class RegistrationPage{
    constructor(page){
        this.page=page;

        this.firstName=page.locator('#customer\\.firstName');
        this.lastName=page.locator("input[id='customer.lastName']");
        this.address=page.locator("//input[@id='customer.address.street']");
        this.city = page.locator('#customer\\.address\\.city');
        this.state = page.locator('#customer\\.address\\.state');
        this.zipCode = page.locator('#customer\\.address\\.zipCode');
        this.phoneNumber = page.locator('#customer\\.phoneNumber');
        this.ssn = page.locator('#customer\\.ssn');
        this.username = page.locator('#customer\\.username');
        this.password = page.locator('#customer\\.password');
        this.confirmPassword=page.locator("#repeatedPassword");

        this.registerButton=page.getByRole('button',{name:'Register',});
    }

    async registerUser(user){
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.address.fill(user.address);
    await this.city.fill(user.city);
    await this.state.fill(user.state);
    await this.zipCode.fill(user.zipCode);
    await this.phoneNumber.fill(user.phoneNumber);
    await this.ssn.fill(user.ssn);
    await this.username.fill(user.username);
    await this.password.fill(user.password);
    await this.confirmPassword.fill(user.password);

    await this.registerButton.click();

    }

}

module.exports = { RegistrationPage };