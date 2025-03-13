import { test, expect } from '@playwright/test';

test('Check box test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  
   //check() → Selects (checks) a checkbox
   //uncheck() → Unselects (unchecks) a checkbox
   //isChecked() → Verifies if the checkbox is checked
  
  //To check if the check box is checked or not (True or False)
  const chkbox1 = await page.locator('#checkBoxOption1');
  await chkbox1.check();
  expect(await chkbox1.isChecked()).toBeTruthy();

  //verify the value of the checkbox
  const chk1value = await chkbox1.getAttribute('value');
  expect (chk1value).toBe('option1');

   // Uncheck a checkbox
   const chkbox2 = await page.locator('#checkBoxOption2');
   const chk2value = await chkbox2.uncheck();
   expect(await chkbox2.isChecked()).toBeFalsy();

   //Checking Only If Not Already Checked
   const chkbox3 = await page.locator('#checkBoxOption2');
   if(!(await chkbox3.isChecked())){
     await chkbox3.check();
   }
   expect (await chkbox3.isChecked()).toBeTruthy();
});