const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Trust AWS proxy
app.set('trust proxy', 1);

// Add compression
app.use(compression());

// Add proper CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-production-domain.com' 
    : 'http://localhost:3000'
}));

app.use(express.json());

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../my-react-app/build')));

// API routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Handle ALL other routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-react-app/build/index.html'));
});

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
