'use strict';
const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

const http = require('http').createServer(app);

app.listen(PORT, () => {
  console.log('Server listening on port 3000!');
});