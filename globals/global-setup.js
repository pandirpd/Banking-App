const path = require('node:path');
const dotenv = require('dotenv');
const { request } = require('@playwright/test');

dotenv.config({
  path: path.resolve(
    __dirname,
    `../.env.${process.env.TEST_ENV || 'qa'}`
  ),
});

async function globalSetup() {
  const baseURL = process.env.BASE_URL;

  if (!baseURL) {
    throw new Error('BASE_URL is not configured');
  }

  const apiContext = await request.newContext({
    baseURL,
  });

  try {
    const response = await apiContext.get('index.htm');

    if (!response.ok()) {
      throw new Error(
        `ParaBank is unavailable. Status: ${response.status()}`
      );
    }
  } finally {
    await apiContext.dispose();
  }
}

module.exports = globalSetup;