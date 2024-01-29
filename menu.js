document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('toggle');
    const menuIconImage = document.querySelector('.img2');

    menuIcon.addEventListener('change', function () {
        if (menuIcon.checked) {
            // Si el menú está activado, agrega la clase 'pressed' para la animación
            menuIconImage.classList.add('pressed');
            
        } else {
            // Si el menú está desactivado, quita la clase 'pressed'
            menuIconImage.classList.remove('pressed');
            
        }
    });
});