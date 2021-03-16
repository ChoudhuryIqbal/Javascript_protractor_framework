

let homepage=require("../pages/homepage");

describe ('Common Functionality Testing', function (){

    beforeEach(function(){
        homepage.getURL("https://juliemr.github.io/protractor-demo/");
    })
    it ("It should add two Integers",function(){
       
        homepage.enterFirstNumber("1");
        homepage.enterSecondNumber("2");
        homepage.enterSubmitBtn();
        browser.sleep(3000);
        homepage.verifyResult(homepage.getResult(),"3");
    })
    afterEach(function(){
        browser.driver.quit();
    })
})