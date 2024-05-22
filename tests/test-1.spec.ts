import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.alza.sk/');
  await page.getByRole('link', { name: 'Odmietnuť všetko' }).click();
  await page.getByPlaceholder('Čo hľadáte? Napr. kábel').fill('h');
  await page.getByPlaceholder('Čo hľadáte? Napr. kábel').click();
  await page.getByPlaceholder('Čo hľadáte? Napr. kábel').fill('hodinky');
  await page.getByTestId('button-search').click();
  await page.getByRole('link', { name: 'CASIO LCW M100DSE-2A - Pánske' }).click();
  await page.getByRole('link', { name: ' Do košíka' }).click();
});