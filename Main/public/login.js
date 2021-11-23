const loginFormHandler = async function(event) {
event.preventDefault();

 // collect values from the login form
 const usernameEl = document.querySelector('#username-input-login');
 const passwordEl = document.querySelector('#password-input_login');

//  if (username && password) {
    // send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ 
        username:usernameEl.value,
         password: passwordEl.value,
       }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // if successful, redirect the browser to the home page
      document.location.replace('/dashboard');
    } else {
      alert('Failed');
    }
  };

    document
      .querySelector('#loginForm')
      .addEventListener('submit', loginFormHandler);
    