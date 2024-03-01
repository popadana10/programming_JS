const backToTop = document.querySelector('#backToTop');

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

backToTop.addEventListener('click', getToTop)