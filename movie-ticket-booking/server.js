const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/book', (req, res) => {
  const { movie, seats } = req.body;
  console.log(`Booking received: ${seats} seat(s) for ${movie}`);
  res.json({ message: `Successfully booked ${seats} seat(s) for ${movie}!` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
