document.addEventListener('click', function (event) {
    if (!event.target.matches('.menu-item-scroll')) return;

    event.preventDefault();

    const element = document.getElementById(event.target.dataset.target);

    element.scrollIntoView({behavior: 'auto', block: "start", inline: "nearest"});
});