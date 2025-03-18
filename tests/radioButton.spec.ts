import { test, expect } from '@playwright/test';

test('Tests for using Radio buttons', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    //read all the radio buttons on the page.
    const radioButtons = await page.locator('input[name="radioButton"]');

    for(let i=0; i < await radioButtons.count(); i++){
        await radioButtons.nth(i).check(); // ith radio button will be checked
        for(let j=0; j<await radioButtons.count();j++){
            if(i==j){
             //since ith button is checked in the outer loop,when i==j the button will be cheked and rest all them will be unchecked
              expect (await radioButtons.nth(j).isChecked()).toBeTruthy();
            }else{
              expect (await radioButtons.nth(j).isChecked()).toBeFalsy();
            }
        }

    }

    

});
