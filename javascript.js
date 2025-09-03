document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  // Select all error message elements
  const errors = document.querySelectorAll('.error');
  errors.forEach(error => error.textContent = '');

  let isValid = true;

  // Name Validation
  if (name === '') {
    setError(0, 'Name is required');
    isValid = false;
  } else if (name.length < 3) {
    setError(0, 'Name must be at least 3 characters');
    isValid = false;
  }

  // Email Validation
  if (email === '') {
    setError(1, 'Email is required');
    isValid = false;
  } else if (!validateEmail(email)) {
    setError(1, 'Invalid email format');
    isValid = false;
  }

  
  // Password Validation
  if (password === '') {
    setError(2, 'Password is required');
    isValid = false;
  } else if (password.length < 6) {
    setError(2, 'Password must be at least 6 characters');
    isValid = false;
  }

  // Confirm Password
  if (confirmPassword === '') {
    setError(3, 'Please confirm your password');
    isValid = false;
  } else if (confirmPassword !== password) {
    setError(3, 'Passwords do not match');
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
  }
});

function setError(index, message) {
  document.querySelectorAll('.error')[index].textContent = message;
}

function validateEmail(email) {
  // Simple regex for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
