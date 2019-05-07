const I = actor();

export default integrationPage = {

  referNowBtn: 'div[data-form="register"] button',
  loginLnk: 'a[href="#"]',
  fields: {
    email: 'input[data-field="email"]',
    password: 'input[data-field="password"]'
  },
  loginBtn: 'button[type="submit"]',
  errorMsg: 'div[class="notification error"]',

  referNow() {
    I.wait(3);
    within({ frame: `${process.env.IFRAME_ID}` }, () => {
      I.click(this.referNowBtn);
    });
  },

  login(data) {
    I.wait(3);
    within({ frame: `${process.env.IFRAME_ID}` }, () => {
      I.click(this.loginLnk);
      I.fillField(this.fields.email, data.email);
      I.fillField(this.fields.password, data.password);
      I.click(this.loginBtn);
    });
  },

  seeError() {
    within({ frame: `${process.env.IFRAME_ID}` }, () => {
      I.seeElement(this.errorMsg);
    });
  }
}
