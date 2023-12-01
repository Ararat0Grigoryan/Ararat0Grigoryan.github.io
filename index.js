document.addEventListener('click', function (event) {
    if (!event.target.matches('.menu-item-scroll')) return;

    event.preventDefault();

    const element = document.getElementById(event.target.dataset.target);

    element.scrollIntoView({behavior: 'auto', block: "start", inline: "nearest"});
});


function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display === '' ? mobileMenu.style.display = 'none' : mobileMenu.style.display = '';
}