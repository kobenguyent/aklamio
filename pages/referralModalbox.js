const I = actor();

export default referralModalBox = {

  giveawayBtn: 'button[data-aklamio-recommend-rr-follower]',
  emailField: 'form[data-form="find_or_register"] input[data-field="email"]',
  continueBtn: 'form[data-form="find_or_register"] button[type="submit"]',
  sharingLink: 'input[data-aklamio-recommend-shortlink]',
  socialSharingOptions: 'ul[class="referral-modalbox-sharing"]',
  errorMsg: 'div[class="notification error"]',

  referProduct(emailAddress, type = 'giveaway') {
    within({ frame: `${process.env.IFRAME_ID}` }, () => {
      switch (type) {
        case 'giveaway':
          I.click(this.giveawayBtn);
          break;
      }

      I.fillField(this.emailField, emailAddress);
      I.click(this.continueBtn);
      I.wait(2);
    });
  },

  seeSharingLink() {
    within({ frame: `${process.env.IFRAME_ID}` }, () => {
      I.seeElement(this.sharingLink);
    });
  },

  seeSocialSharingOptions() {
    within({ frame: `${process.env.IFRAME_ID}` }, () => {
      I.seeElement(this.socialSharingOptions);
    });
  },

  seeError() {
    within({ frame: `${process.env.IFRAME_ID}` }, () => {
      I.seeElement(this.errorMsg);
    });
  }
}
