const express = require('express');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Basic Route (Test)
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Example API Route
app.get('/api/data', (req, res) => {
  res.json({
    message: "This is data from the backend!",
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
