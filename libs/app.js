window.onload = function () {
    'use strict';
    //variables
    var msg = libro.msg;

    const fondo = document.querySelector('.fondo');
    const nuevo = document.querySelector('#bnuevo');

    nuevo.addEventListener('click', () => {
       fondo.style.visibility = "visible";
        msg("fondo open");  
    });

    fondo.addEventListener('click', () => {
        fondo.style.visibility = "hidden";
        msg("fondo close");  
    });

    window.addEventListener('keyup', (e) => {
        if (e.keyCode == 27) {
            fondo.style.visibility = "hidden";
            msg("Esc presionado");  
        }
    });
}