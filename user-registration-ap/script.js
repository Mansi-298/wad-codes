document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (mobile.length !== 10 || isNaN(mobile)) {
      alert("Mobile number must be 10 digits.");
      return;
    }
  
    if (!emailRegex.test(email)) {
      alert("Invalid email address.");
      return;
    }
  
    const userData = { firstName, lastName, dob, gender, mobile, email };
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
  
    alert("Registration successful!");
    document.getElementById('registrationForm').reset();
  });
  