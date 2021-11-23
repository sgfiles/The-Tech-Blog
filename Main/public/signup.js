const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
  
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
  


// document.querySelector('#homeButton').addEventListener('click', () =>{
//     location.href = '/'
// })
// document.querySelector('#dashButton').addEventListener('click', () => {
//     location.href = '/dashboard'
// })
// let loginBtn = document.querySelector('#loginButton')
// if (loginBtn){
//     loginBtn.addEventListener('click', ()=> {
//         location.href = '/login'
//     })
// }