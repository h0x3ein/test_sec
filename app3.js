const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();

// Vulnerability 1: Use of deprecated bodyParser() middleware
app.use(bodyParser());

// Vulnerability 2: Weak password hashing algorithm (MD5)
function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

// Vulnerability 3: SQL Injection vulnerability
app.get('/users', (req, res) => {
  const username = req.query.username;
  const query = `SELECT * FROM users WHERE username = '${username}'`;
  // ...
});

// Vulnerability 4: No input validation for user input
app.post('/reset-password', (req, res) => {
  const newPassword = req.body.password;
  // ...
});

// Vulnerability 5: Insecure direct object references
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = getUserById(userId);
  // ...
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
