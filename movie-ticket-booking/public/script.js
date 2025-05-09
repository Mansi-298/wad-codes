document.getElementById('bookingForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const movie = document.getElementById('movie').value;
  const seats = document.getElementById('seats').value;

  const response = await fetch('/book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie, seats })
  });

  const result = await response.json();
  document.getElementById('confirmation').innerText = result.message;
});
