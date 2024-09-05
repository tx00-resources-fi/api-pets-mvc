const express = require('express');
const app = express();
const petRouter = require('./routes/petRouter');
const logger = require('./middleware/logger')

// Middleware to parse JSON
app.use(express.json());

app.use(logger)

// Use the petRouter for all /pets routes
app.use('/pets', petRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});