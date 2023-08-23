$(document).ready(function() {
    // Guarda el color original del elemento .nav-link.active
    const originalColor = $('.nav-link.active').css('color');

    $('.nav-link').hover(
        function() { // Al hacer hover
            if ($(this).hasClass('active')) {
                return; // Si es el enlace activo, simplemente salimos de la función
            }
            $('.nav-link.active').css('color', '#2c3e50');
        },
        function() { // Al salir del hover
            if ($(this).hasClass('active')) {
                return; // Si es el enlace activo, simplemente salimos de la función
            }
            $('.nav-link.active').css('color', originalColor);
        }
    );
});