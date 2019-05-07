Feature('Login');

Before((I) => {
    I.amOnPage(`/integration/${process.env.PORTAL_ID}`);
})

Scenario('Login with invalid credentials', (integrationPage, data) => {
    const { email, password } = data.credentials.invalid 
    integrationPage.login({ email, password });
    integrationPage.seeError();
});

