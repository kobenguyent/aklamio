const { I, integrationPage, referralModalBox, data } = inject();

Feature('Referral');

Before(() => {
    I.amOnPage(`/integration/${process.env.PORTAL_ID}`);
})

Scenario('Refer product 1 successfully', () => {
    integrationPage.referNow();
    referralModalBox.referProduct(data.email.valid);
    referralModalBox.seeSharingLink();
    referralModalBox.seeSocialSharingOptions();
});

Scenario('Refer product 1 with invalid email', () => {
    integrationPage.referNow();
    referralModalBox.referProduct(data.email.invalid);
    referralModalBox.seeError();
});
