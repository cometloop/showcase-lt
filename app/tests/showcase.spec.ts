/* eslint-disable testing-library/no-await-sync-query */
/* eslint-disable testing-library/prefer-screen-queries */
import { expect, test } from '@playwright/test';

const URL = 'http://localhost:3000';

test('Shows filtered results', async ({ page }) => {
	await page.goto(URL);

	await expect(page).toHaveTitle(/LT Showcase/);

	const loading = page.getByTestId('loading');
	await expect(loading).toBeTruthy();

	const search = page.getByPlaceholder('Find a photo...');
	await search.fill('LT Welcome');

	const ltWelcomePhoto = page.getByTestId('photo-id-7');
	await expect(ltWelcomePhoto).toBeTruthy();
});

test('Shows 3 random photos in unfiltered list if no search query present', async ({
	page,
}) => {
	await page.goto(URL);

	const loading = page.getByTestId('loading');
	await expect(loading).toBeTruthy();

	const photoResultsList = await page.getByTestId('photo-results');
	await expect(photoResultsList).toHaveJSProperty('childElementCount', 3);
});
