const menuBtn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('.header-nav');

menuBtn.addEventListener('click', () => {
    nav.toggleAttribute("data-visible");
    document.body.classList.toggle('no-scroll');
});