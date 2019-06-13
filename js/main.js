(function() {
	"use strict";

	var regalo = document.querySelector('#regalo');

	document.addEventListener('DOMContentLoaded', function(){

		// Campos datos usuario

		var nombre = document.querySelector('#nombre');
		var apellido = document.querySelector('#apellido');
		var email = document.querySelector('#email');

		// Campo pases

		var pase_dia = document.querySelector('#pase_dia');
		var pase_completo = document.querySelector('#pase_completo');
		var pase_dosdias = document.querySelector('#pase_dosdias');

		// Botones y divs

		var calcular = document.querySelector('#calcular');
		var errorDiv = document.querySelector('#error');
		var botonRegistro = document.querySelector('#btnRegistro');
		var resulado = document.querySelector('#lista-productos');

		// Extras

		var etiquetas = document.querySelector('#etiquetas');
		var camisas = document.querySelector('#camisa_evento');



		calcular.addEventListener('click', calcularMontos);

		function calcularMontos(event) {
			event.preventDefault();
			if (regalo.value === '') {
				alert("Debes elegir un regalo");
				regalo.focus();
			} else {
				var boletosDia = parseInt(pase_dia.value, 10) || 0,
					boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
					boletoCompleto = parseInt(pase_completo.value, 10) || 0,
					cantCamisas = parseInt(camisas.value, 10) || 0,
					cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

				var totalPagar = (boletosDia*30) + (boletos2Dias*45) + (boletoCompleto*50) + ((cantCamisas*10)*.93) + (cantEtiquetas*2);

				console.log(totalPagar);
			}
		}





	}); //DOM CONTENT LOADED
})();