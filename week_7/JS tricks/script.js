const backToTop = document.querySelector('#backToTop');
const header = document.querySelector('header');
const logo = document.querySelector('.logo');

const getToTop = () => {
    document.body.scrollTop = 0; // tells the btn to go back to px 0  // for safari
    document.documentElement.scrollTop = 0; // we have 2 scrollTop for 2 diff browsers // chrome, ff and others
   // header.style.backgroundColor = 'pink';
    // header.classList.remove('bg');
    // header.classList.add('bg');
       // header.classList.toggle('bg');
}

backToTop.addEventListener('click', getToTop);

window.onscroll = function() {scrollFunction()};


const scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
        header.classList.add('bg');
    } else {
        backToTop.style.display = "none";
        header.classList.remove('bg');
    }
  }
  
/*
backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.querySelector('#backToTop').addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

*/
