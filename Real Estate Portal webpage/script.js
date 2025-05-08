const buttons = document.querySelectorAll('.contact-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for your interest! Our agent will contact you soon.');
  });
});
