const navMobile = document.getElementById('nav-mobile');
const navMobileOpen = document.getElementById('nav-mobile-open');
const navMobileClose = document.getElementById('nav-mobile-close');

navMobileOpen.addEventListener('click', () => {
    navMobile.style.top = '0px'
    console.log(navMobile);
});

navMobileClose.addEventListener('click', () => {
    navMobile.style.top = '-600px'
});