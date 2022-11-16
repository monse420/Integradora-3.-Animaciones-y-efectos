const typed = new Typed('.typed', {
	strings: [
		'<i class="opciones"></i>',
		'<i class="opciones">Puesto</i>',
		'<i class="opciones">Locación</i>',
		'<i class="opciones">Edad</i>',
        '<i class="opciones">Salario</i>',
        '<i class="opciones">Fecha de Ingreso</i>'
	],

	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


// Inicializamos jQuery
$(document).ready(function() {
     
    $('#tarea').DataTable( {
        "ajax": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/730692/json.txt",
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
        ]
    } );
} );

// mouse pasa por encima de algún elemento
window.addEventListener('mouseover', function(evt) {
	// Si elemento tiene la clase `enlace`
	if (evt.target.classList.contains('enlace')) {
	  evt.target.style.color = 'orange';
	}
  });
  
  // mouse sale de encima de algún elemento
  window.addEventListener('mouseout', function(evt) {
	// Si elemento tiene la clase `enlace`
	if (evt.target.classList.contains('enlace')) {
	  evt.target.style.color = 'black';
	}
  });