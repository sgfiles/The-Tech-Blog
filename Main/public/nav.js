document.querySelector('#homeButton').addEventListener('click', () =>{
    location.href = '/'
})
document.querySelector('#dashButton').addEventListener('click', () => {
    location.href = '/dashboard'
})
let loginBtn = document.querySelector('#loginButton')
if (loginBtn){
    loginBtn.addEventListener('click', ()=> {
        location.href = '/login'
    })
}