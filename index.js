const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

// Connect to MongoDB
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Create the Express app
const app = express();

// Parse JSON bodies
app.use(express.json());

// Define routes
app.use('/auth', require('./routes/authorisation'));
app.use('/books', require('./routes/books'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
