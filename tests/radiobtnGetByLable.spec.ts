import {test , expect} from '@playwright/test';

test ('select a Radio Button using getByLable', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    //1. selecting a Radio button using getByLable - this selects the radio button in the page using getByLable
    await page.getByLabel('Radio1').click();
    
    expect (await page.getByLabel('Radio1').isChecked()).toBeTruthy();

});