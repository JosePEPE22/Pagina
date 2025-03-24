
const cambiarIdiomaBtn = document.getElementById('cambiarIdiomaBtn');


cambiarIdiomaBtn.addEventListener('click', function() {
    var elementos = document.querySelectorAll('[data-es], [data-en]');

    
    if (document.body.lang === 'es') {
        document.body.lang = 'en';  
        cambiarIdiomaBtn.textContent = "Switch to Spanish"; 
    } else {
        document.body.lang = 'es';  
        cambiarIdiomaBtn.textContent = "Change to English";  
    }

    
    elementos.forEach(function(elemento) {
        var textoEs = elemento.getAttribute('data-es');
        var textoEn = elemento.getAttribute('data-en');

        if (document.body.lang === 'es') {
            elemento.textContent = textoEs;  
        } else {
            elemento.textContent = textoEn;  
        }
    });
});

var modoBtn = document.getElementById('modoBtn');
var iconoModo = document.getElementById('iconoModo');

modoBtn.addEventListener('click', function() {
 
    document.body.classList.toggle('dark-mode');

    
    if (document.body.classList.contains('dark-mode')) {
        iconoModo.src = 'multimedia/dia.png';  
    } else {
        iconoModo.src = 'multimedia/noche.png';  
    }
});