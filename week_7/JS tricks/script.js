const backToTop = document.querySelector('#backToTop');
const header = document.querySelector('header');

const getToTop = () => {
    document.body.scrollTop = 0; // tells the btn to go back to px 0  // for safari
    document.documentElement.scrollTop = 0; // we have 2 scrollTop for 2 diff browsers // chrome, ff and others
   // header.style.backgroundColor = 'pink';
    // header.classList.remove('bg');
    // header.classList.add('bg');

}

backToTop.addEventListener('click', getToTop)

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
