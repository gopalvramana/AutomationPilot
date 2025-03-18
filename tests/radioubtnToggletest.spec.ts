import {test , expect} from '@playwright/test';

test ('Testing toggling Radio buttons', async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
   
    const radioButtons = await page.locator('input[type="radio"]');
    const btnCount = await radioButtons.count();

    for(let i=0; await i < btnCount; i++){
        const radio = radioButtons.nth(i);
        await radio.click();
        for(let j=0; j < btnCount;j++){
            if(i!=j){
                expect (await radioButtons.nth(j).isChecked()).toBeFalsy();
            }
        }
    }

});