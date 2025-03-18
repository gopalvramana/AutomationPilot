import {test,expect} from "@playwright/test";

//1.Find all radio button labels.
//2.Match the label text with the desired value.
//3.Select the corresponding radio button.

test('Select radio button based on label text', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const targetLabel = 'Radio2'; // Change this to dynamically select different radio buttons

    // Find all labels associated with radio buttons
    const labels = page.locator('label'); // Assuming labels are directly linked to radio buttons

    let found = false;
    for (let i = 0; i < await labels.count(); i++) {
        const labelText = await labels.nth(i).innerText();
        
        if (labelText.trim() === targetLabel) {
            // Find the corresponding radio button (assuming it's inside the label or next to it)
            const radioButton = labels.nth(i).locator('input[type="radio"]');
            await radioButton.check();
            expect(await radioButton.isChecked()).toBeTruthy();
            found = true;
            console.log(`✅ Selected radio button with label: ${targetLabel}`);
            break;
        }
    }

    expect(found).toBeTruthy(); // Ensure we found a matching label
});