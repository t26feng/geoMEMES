const express = require('express');

const indexRoute = require('./routes/indexRoute.js');

const app = express();
// Get requests
app.get('/', indexRoute.get);

// Start server
app.listen(3000, () => {});
