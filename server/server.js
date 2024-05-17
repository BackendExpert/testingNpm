const express = require('express');
const app = express();
const port = 8081;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle POST requests
app.post('/NewData', (req, res) => {
  const { name, email, age } = req.body;

  // Process the data (e.g., save to a database)
  console.log(`Received data: ${name}, ${email}, ${age}`);

  // Send a response back to the client
  res.status(200).json({
    message: 'Data received successfully',
    receivedData: { name, email, age }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});