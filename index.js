const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.routes');

const app = express();

// Environment variables
dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log(`DataBase is connected successfully`);
  })
  .catch((err) => {
    console.log(err);
  });

// Body Parsing
app.use(express.json());

// Test Routes
app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT} successfully...`);
});
