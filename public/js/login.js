const loginFormHandler = async (event) => {
    // Prevents the browser from submitting the form
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Please try again. Incorrect username or password.');
      }
    }
  };
  
  document
    .querySelector('.login-container')
    .addEventListener('submit', loginFormHandler);