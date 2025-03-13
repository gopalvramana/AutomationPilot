import {test,expect} from "@playwright/test";

test ('Dynamic checkbox test', async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    //Validating the Number of Checked Checkboxes

    await page.locator('#checkBoxOption1').check();
    await page.locator('#checkBoxOption2').check();

    const checkedcount = await page.locator('input[type="checkbox"]:checked').count();
    expect (checkedcount).toBe(2);
    console.log(`Checked checkboxes count: ${checkedcount}`);

    
    //dynamically checking all check boxes
    const checkboxes = await page.locator('input[type="checkbox"]');
    
    for(let i=0 ;i < await checkboxes.count();i++){
        await checkboxes.nth(i).check();
    }
    //count of all checked check boxes
    const checkedCount = await page.locator('input[type="checkbox"]:checked').count();
    

    expect (checkedCount).toBe(await checkboxes.count());


});