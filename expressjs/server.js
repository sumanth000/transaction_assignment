const express = require('express');
const cors = require('cors');  // Import CORS
const app = express();
const port = 3000;
const itemRoutes = require('./routes/items');
require('dotenv').config();

// Middleware to parse JSON
app.use(express.json());

// Use CORS



app.use(cors({
    origin: '*',  // Allow requests from your React app
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization'
  }));

// Use item routes
app.use('/api/transactions', itemRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
