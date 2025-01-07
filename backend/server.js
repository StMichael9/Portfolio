const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../my-react-app/build')));

// Basic route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Catch all routes to serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-react-app/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
