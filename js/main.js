$.backstretch([
    'img/bg1.jpg',
    'img/bg2.png',
    'img/bg3.jpg'
], {
    fade: 750,
    duration: 4000
});

$(document).ready(function () {
    $('.portrait').tooltipster({
        theme: 'tooltipster-shadow',
        side: 'bottom'
    });
});
