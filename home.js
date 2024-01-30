document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('menu');
    var menuOpener = document.getElementById('menu-opener');
    
    menuOpener.addEventListener('click', function () {
        menu.classList.toggle('active');
        var nav = document.getElementById('nav');
        nav.style.display = menu.classList.contains('active') ? 'block' : 'none';
    });
});
