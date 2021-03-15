describe ('Common Functionality Testing', function (){
    it ("It should add two Integers",function(){
        browser .get ("https://juliemr.github.io/protractor-demo/");
        element (by.model('first') ).sendKeys("1");
        element(by.model('second')).sendKeys("2");
        element(by.id('gobutton')).click();
        browser.sleep(3000);
        var actualText=element(by.css('.ng-binding')).getText();
        expect(actualText).toBe('3');


    })
})