const { test, expect } = require('@playwright/test');

test(
  'invalid customer ID returns an error',
  { tag: '@api' },
  async ({ request }) => {
    const response = await request.get(
      'services/bank/customers/999999'
    );

    expect(response.status()).toBeGreaterThanOrEqual(400);
  }
);