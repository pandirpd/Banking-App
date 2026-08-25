const { test, expect } = require('@playwright/test');

test('API health check', async ({ request }) => {
  const response = await request.get(
    'https://parabank.parasoft.com/parabank/services/bank/customers/12212',
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );

  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();

  console.log(JSON.stringify(responseBody, null, 2));

  expect(responseBody).toHaveProperty('id', 12212);
  expect(responseBody).toHaveProperty('firstName', 'John');
  expect(responseBody).toHaveProperty('lastName', 'Smith');
  expect(responseBody).toHaveProperty(
    'address.city',
    'Beverly Hills'
  );
});