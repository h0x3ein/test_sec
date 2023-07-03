const crypto = require('crypto');

function encryptData(data, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encryptedData = cipher.update(data, 'utf8', 'hex');
  encryptedData += cipher.final('hex');
  return encryptedData;
}

const sensitiveData = 'This is sensitive information';
const encryptionKey = 'weakkey';

const encryptedData = encryptData(sensitiveData, encryptionKey);
console.log('Encrypted Data:', encryptedData);
