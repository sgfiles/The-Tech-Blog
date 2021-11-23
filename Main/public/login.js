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


// const signupFormHandler = async (event) => {
//     event.preventDefault();
  
//     const username = document.querySelector('#registerUsername').value.trim();
//     const email = document.querySelector('#registerEmail').value.trim();
//     const password = document.querySelector('#registerPassword').value.trim();
//     console.log(username,email,password)
//     if (username && email && password) {
//       const response = await fetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify({ username, email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     }
  
//   };

//   document.addEventListener('DOMContentLoaded', () => {
    document
      .querySelector('#loginForm')
      .addEventListener('submit', loginFormHandler);
    
  //   document
  //     .querySelector('#registerFrom')
  //     .addEventListener('submit', signupFormHandler);
  // });