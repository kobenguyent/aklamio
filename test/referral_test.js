Feature('Referral');

Before((I) => {
    I.amOnPage(`/integration/${process.env.PORTAL_ID}`);
})

Scenario('Refer product 1 successfully', (integrationPage, referralModalBox, data) => {
    integrationPage.referNow();
    referralModalBox.referProduct(data.email.valid);
    referralModalBox.seeSharingLink();
    referralModalBox.seeSocialSharingOptions();
});

Scenario('Refer product 1 with invalid email', (integrationPage, referralModalBox, data) => {
    integrationPage.referNow();
    referralModalBox.referProduct(data.email.invalid);
    referralModalBox.seeError();
});
