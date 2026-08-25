const { test, expect } = require('@playwright/test');
const { createConnection } = require('../utils/mysqlDatabase');

test(
  'connects to MySQL database',
  { tag: '@mysql' },
  async () => {
    const connection = await createConnection();

    const [rows] = await connection.query(
      'SELECT 1 AS connectionTest'
    );

    expect(rows[0].connectionTest).toBe(1);

    await connection.end();
  }
);