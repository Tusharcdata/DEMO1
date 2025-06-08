document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form from submitting

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const message = document.getElementById('message');

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters!";
    return;
  }

  // Simulate success
  message.style.color = "green";
  message.textContent = `Registration successful for ${username}!`;

  // You can now send this data to a server using fetch or axios
});