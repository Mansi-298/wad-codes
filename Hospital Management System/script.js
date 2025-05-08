let count = 0;

document.getElementById('patientForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('patientName').value.trim();
  const age = document.getElementById('patientAge').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const disease = document.getElementById('disease').value.trim();
  const contact = document.getElementById('contact').value.trim();

  if (contact.length !== 10 || isNaN(contact)) {
    alert("Contact number must be 10 digits.");
    return;
  }

  count++;
  document.getElementById('patientCount').textContent = count;

  alert(`Patient ${name} registered successfully!`);

  // Reset form
  this.reset();
});
