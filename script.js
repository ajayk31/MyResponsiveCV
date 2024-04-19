const hamburger = document.querySelector('.hamburger');
const hamburgerChange = document.querySelector('#navbar');

hamburger.addEventListener('click',()=>{
    hamburgerChange.classList.toggle('change');
})