require('dotenv').config({path:__dirname+'/./../../.env'})

describe('Blue Bottle Log-in Page', function () {
  it('should load the correct page', function() {
    // navigate to sign-in page
    browser.url('https://bluebottlecoffee.com/sign_in/new')
      .then(browser => browser.getTitle())
      .then(title => title.should.equal("Sign In | Blue Bottle Coffee"));
  });

  it('allows customer to enter login credentials ', function() {
    // enter email
    $('[name="sign_in[email]"]')
      .then(email => email.setValue(process.env.BLUE_BOTTLE_EMAIL))
      .then(value => should.equal(process.env.BLUE_BOTTLE_EMAIL))
    
    // enter password
    $('[name="sign_in[password]"]')
      .then(email => email.setValue(process.env.BLUE_BOTTLE_PASSWORD))
      .then(value => should.equal(process.env.BLUE_BOTTLE_PASSWORD))
  });

  it('updates the DOM after successful login', function() {
    // click "sign in" button
    $('/html/body/div[2]/div/div/div[2]/div[2]/form/div[3]/input').then(loginButton => {
      loginButton.click();
    })

    // html tag adds signed-in class
    $("/html").then(el => el.getAttribute('class')).then(classes => {
      classes.should.include('signed-in');
    })
  });
});
