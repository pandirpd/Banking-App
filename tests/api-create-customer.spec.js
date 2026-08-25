const { test, expect } = require('@playwright/test');

test('get customer details with API', async ({ request }) => {
  const response = await request.get(
    'services/bank/customers/12212',
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  console.log(JSON.stringify(responseBody, null, 2));

  expect(responseBody).toHaveProperty('id', 12212);
  expect(responseBody).toHaveProperty('firstName');
  expect(responseBody).toHaveProperty('lastName');
});