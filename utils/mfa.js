const { generate } = require('otplib');

async function generateOtp(secret) {
  if (!secret) {
    throw new Error('MFA_SECRET is not configured');
  }

  const normalizedSecret = secret.replace(/\s+/g, '').toUpperCase();

  if (!/^[A-Z2-7]+$/.test(normalizedSecret)) {
    throw new Error(
      'MFA_SECRET must be a Base32 value containing only A-Z and 2-7'
    );
  }

  return generate({ secret: normalizedSecret });
}

module.exports = { generateOtp };