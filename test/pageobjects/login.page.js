const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get usernameTextBox () {
        return $('#username');
    }

    get passwordTextBox () {
        return $('#password');
    }

    get submitButton () {
        return $('button[type="submit"]');
    }

    get loginMassage() {
        return $('#flash');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.usernameTextBox.setValue(username);
        await this.passwordTextBox.setValue(password);
        await this.submitButton.click();
    }
    async checkMassage(msg){
        await expect(this.loginMassage).toHaveText(expect.stringContaining(msg));
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
