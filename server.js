const express = require('express');
const path = require('path');
const app = express();

// Middleware to handle URL rewriting
app.use((req, res, next) => {
  if (!req.path.includes('.') && !req.path.startsWith('/api')) {
    req.url += '.html';
  }
  next();
});

// Serve static files from the 'build' directory (or the directory where your built files are located)
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes by serving the 'index.html'
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
