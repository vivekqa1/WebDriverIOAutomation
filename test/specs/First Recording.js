describe("First Recording", () => {
  it("tests First Recording", async () => {
   
    await browser.url("https://the-internet.herokuapp.com/login")
    await browser.$("#username").setValue("tomsmith")
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$("aria/ Login").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    await browser.$("aria/Logout").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  });
});
