const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Booking Route
app.post('/book', (req, res) => {
  const { movie, seats } = req.body;
  console.log(`Booking received: ${seats} seat(s) for ${movie}`);
  res.json({ message: `Successfully booked ${seats} seat(s) for ${movie}!` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
