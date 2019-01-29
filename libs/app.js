window.onload = function () {
    'use strict';

    //variables

    //eventos
    document.addEventListener('click', function(e) {
        switch (e.target.id) {
            case 'search':
                libro.searching()
                break
            case 'map':
                hideform(cartel)
                break
          
            case 'camion':
                showform()
                break
            default:
                libro.msg(e.target.id + " clickeado. ")
                break
        }
    })

}