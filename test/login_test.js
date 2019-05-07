
const { I, integrationPage, data } = inject();

Feature('Login');

Before(() => {
    I.amOnPage(`/integration/${process.env.PORTAL_ID}`);
})

Scenario('Login with invalid credentials', () => {
    const { email, password } = data.credentials.invalid 
    integrationPage.login({ email, password });
    integrationPage.seeError();
});

