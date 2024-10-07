describe('Demo Test', function () {

    it('First Test', async () => {
        browser.url('https://www.google.com')
        await browser.$('[name="q"]').setValue('webdriverIO')
        await browser.$('[name="btnK"]').click()
        await browser.pause(2000)

    })
})