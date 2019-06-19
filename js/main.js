(function() {
	"use strict";

	var regalo = document.querySelector('#regalo');

	document.addEventListener('DOMContentLoaded', function(){

		/// MAPA ///

		var mapa = document.querySelector('#mapa');
		if (mapa) {
			var map = L.map('mapa').setView([-32.940921, -60.649048], 17);

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			L.marker([-32.940921, -60.649048]).addTo(map)
	    	 .bindPopup('GdlWebCamp 2019 </br> Boletos ya diponibles.')
	    	 .openPopup();
	    }

		/// VARIABLES ///

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
		var lista_productos = document.querySelector('#lista-productos');
		var suma = document.querySelector('#suma-total');

		// Extras

		var etiquetas = document.querySelector('#etiquetas');
		var camisas = document.querySelector('#camisa_evento');


		/// FUNCIONES ///

		if (calcular) {
			// Calcular totales
			calcular.addEventListener('click', calcularMontos);

			// Mostrar días de acuerdo al pase
			pase_dia.addEventListener('blur', mostrarDias);
			pase_completo.addEventListener('blur', mostrarDias);
			pase_dosdias.addEventListener('blur', mostrarDias);

			// Ocultar botones
			nombre.addEventListener('blur', validarCampos);
			apellido.addEventListener('blur', validarCampos);
			email.addEventListener('blur', validarEmail);

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

					var listadoProductos = [];

					if (boletosDia >= 1) {
						listadoProductos.push(boletosDia + ' Pase/s por día');
					}
					if (boletos2Dias >= 1) {
						listadoProductos.push(boletos2Dias + ' Pase/s por dos día');
					}
					if (boletoCompleto >= 1) {
						listadoProductos.push(boletoCompleto + ' Pase/s competos');
					}
					if (cantCamisas >= 1) {
						listadoProductos.push(cantCamisas + ' Camisa/s');
					}
					if (cantEtiquetas >= 1) {
						listadoProductos.push(cantEtiquetas + ' Etiqueta/s');
					}

					lista_productos.style.display = "block";

					lista_productos.innerHTML = '';

					for (var i = 0; i < listadoProductos.length; i++) {
						lista_productos.innerHTML += listadoProductos[i] + '<br/>';
					}

					suma.innerHTML = "$ " + totalPagar.toFixed(2);
				}
			}

			function mostrarDias() {
				var boletosDia = parseInt(pase_dia.value, 10) || 0,
					boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
					boletoCompleto = parseInt(pase_completo.value, 10) || 0;

					var diasElegidos = [];

					if (boletosDia > 0) {
						diasElegidos.push('#viernes');
					}
					if (boletos2Dias > 0) {
						diasElegidos.push('#viernes' , '#sabado');
					}
					if (boletoCompleto > 0) {
						diasElegidos.push('#viernes' , '#sabado' , '#domingo');
					}
					for (var i = 0; i < diasElegidos.length; i++) {
						document.querySelector(diasElegidos[i]).style.display = 'block';
					}
			}

			function validarCampos() {
				if (this.value == '') {
					errorDiv.style.display = 'block';
					alert("Este campo es obligatorio");
					this.style.border = "1px solid #ff0000";
				} else {
					errorDiv.style.display = 'none';
					this.style.border = "1px solid #a9a9a9";
				}
			}

			function validarEmail() {
				if (this.value.indexOf("@") > -1) {
					errorDiv.style.display = 'none';
					this.style.border = "1px solid #a9a9a9";
				} else {
					errorDiv.style.display = 'block';
					alert('Debe tener al menos un "@"');
					this.style.border = "1px solid #ff0000";
				}
			}
		}

	}); //DOM CONTENT LOADED
})();

$(function() {


	// Lettering
	$('.nombre-sitio').lettering();

	// Menu fijo
	var windowHeight = $(window).height();
	var barraAltura = $('.barra').innerHeight();

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll > windowHeight) {
			$('.barra').addClass('fixed');
			$('body').css({'margin-top': barraAltura+'px'});
		}else {
			$('.barra').removeClass('fixed');
			$('body').css({'margin-top': '0px'});
		};
	});

	// Programa de Conferencias
	$('.ocultar').hide();
	$('.programa-evento .info-curso:first').show();
	$('.menu-programa a:first').addClass('activo');

	$('.menu-programa a').on('click', function() {
		$('.menu-programa a').removeClass('activo');
		$(this).addClass('activo');
		$('.ocultar').hide();
		var enlace = $(this).attr('href');
		$(enlace).fadeIn(500);
		return(false);
	});

	// Animaciones para los Numeros
	var resumenLista = $('.resumen-evento');
	
	if (resumenLista.lenght > 0) {
		$('.resumen-evento').waypoint(function() {
			$('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1700);
			$('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1700);
			$('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1700);
			$('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1700);
		}, {
			offset: '60%'
		});
	}

			
	

	$('.cuenta-regresiva').countdown('2020/06/27 09:00:00', function(event) {
		$('#dias').html(event.strftime('%D'));
		$('#horas').html(event.strftime('%H'));
		$('#minutos').html(event.strftime('%M'));
		$('#segundos').html(event.strftime('%S'));
	});
});

