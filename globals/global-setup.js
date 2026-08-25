async function globalSetup() {
  console.log('Starting Playwright test run');
  console.log(`Environment: ${process.env.TEST_ENV || 'qa'}`);
}

module.exports = globalSetup;