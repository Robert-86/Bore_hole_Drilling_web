const scroll = document.getElementById('scrollme');
const scrolling = document.getElementById('nextline');
const nav = document.getElementById('nav-bar');

scroll.addEventListener('click', ()=> {
    scrolling.scrollIntoView({
    behavior: 'smooth'
    })
});


// adding eventListener using the windows
window.addEventListener('scroll', ()=> {
   if(window.scrollY > 400) {
    nav.classList.add('active-nav')
   } else {
    nav.classList.remove('active-nav')
   }
})
