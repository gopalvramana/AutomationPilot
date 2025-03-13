import {test,expect} from '@playwright/test';

test('Page sample test', async ({ page }) => {
   await page.goto ("https://rahulshettyacademy.com/AutomationPractice/");

   const title = await page.title();
   expect(title).toBe("Practice Page");

   //get the radio buttton by input value
   const radioButton1 = await page.locator('input[value="radio1"]');
   await radioButton1.click(); //click the radio button
   expect(radioButton1.isChecked()).toBeTruthy(); //check if the radio button is checked or not

   const radiobutton2 = await page.locator('input[value="radio2"]');
   await radiobutton2.click();
   expect(radiobutton2.isChecked()).toBeTruthy();

   const autocomplete = await page.locator('#autocomplete'); //get the autocomplete textbox by it's ID
   await autocomplete.fill("india"); //fill autocomplete text box with text 'india'
   const inputValue = await autocomplete.inputValue();  // read the input value
   expect (inputValue).toBe('india'); //check if the input value as expected or not.


   //dropdown using Option 
   const dropdown = await page.locator('#dropdown-class-example'); //get the dropdown element by ID
   await dropdown.selectOption('Option2'); //select the second option
   const selectedvalue = await dropdown.inputValue(); //get the selected value
   expect (selectedvalue).toBe('option2'); //verify the selected value.

   //dropdown using lable
   const dropdown1 = await page.locator('#dropdown-class-example'); //get the dropdown element by ID
   await dropdown1.selectOption({ label: 'Option3' }); //select the second option using lable
   const selectedvalue1 = await dropdown1.inputValue(); //get the selected value
   expect (selectedvalue1).toBe('option3'); //verify the selected value.

   //dropdown using index
   const dropdown2 = await page.locator('#dropdown-class-example'); //get the dropdown element by ID
   await dropdown2.selectOption({ index: 2 }); //select the second option using lable
   const selectedvalue2 = await dropdown2.inputValue(); //get the selected value
   expect (selectedvalue1).toBe('option3'); //verify the selected value.
   
    //To check if the check box is checked or not (True or False)
   const chkbox1 = await page.locator('#checkBoxOption1');
   await chkbox1.check();
    // Verify if checkbox is checked
   expect(await chkbox1.isChecked()).toBeTruthy();

   //verify the value of the checkbox
   const chk1value = await chkbox1.getAttribute('value');
   expect (chk1value).toBe('option1');

   //check() → Selects (checks) a checkbox
   //uncheck() → Unselects (unchecks) a checkbox
   //isChecked() → Verifies if the checkbox is checked

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