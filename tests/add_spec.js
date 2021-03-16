

let homepage=require("../pages/homepage");

describe ('Common Functionality Testing', function (){

    beforeEach(function(){
        browser.driver.manage().window().maximize();
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
        console.log("Finish Executing Testcases.")
    })
})