const express = require('express');
const app = express();

// Vulnerable endpoint
app.get('/vulnerable', (req, res) => {
  const userSuppliedData = req.query.data;
  eval(userSuppliedData); // This line is intentionally vulnerable to code injection
  res.send('Vulnerable endpoint');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
