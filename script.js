const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',()=> {
    container.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    container.classList.remove('active');
});

const btnPopup = document.querySelector('.register-link');
btnPopup.addEventListener('click', ()=> {
    container.classList.add('active');
});