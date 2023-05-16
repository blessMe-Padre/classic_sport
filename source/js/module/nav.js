const initNav = () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const nav = document.querySelector('.nav');
    const body = document.querySelector('body');

    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('is-active');
        nav.classList.toggle('is-active');
        body.classList.toggle('scroll-lock');
    });
};

export {initNav}