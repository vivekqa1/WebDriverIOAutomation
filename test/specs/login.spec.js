const LoginPage = require('../pageobjects/login.page')

describe('Login Test', function () {

    it('Login First Test', async () => {
        browser.url('https://the-internet.herokuapp.com/login')

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await browser.pause(2000)
        await LoginPage.checkMassage('You logged into a secure area!')
        await browser.pause(2000)

        // await $('#username').setValue('tomsmith')
        // await browser.$('#password').setValue('SuperSecretPassword!')
        // await $('button[type="submit"]').click();
        // await browser.pause(2000)
        // await expect($('#flash')).toHaveText(expect.stringContaining('You logged into a secure area!'))


    })
})