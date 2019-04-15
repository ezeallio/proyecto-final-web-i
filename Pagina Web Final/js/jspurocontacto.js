$(function autocompletadoBarraBusq() {
  var opciones = [
    "Remera BCD",
    "Remera Científica",
    "Remera para el Rey de los Nerds",
    "Remera Tabla de Superhéroes",
    "Remera Empleado Nerd",
    "Remera Nasa Nerd"
  ];

  $('.typesearch').autocomplete({
    source: opciones,
    messages: {
      noResults: '',
      results: function autocompletadoBarraBusq() {}
    }
  });
});

$(function limpiarBarraBusq() {
  $(".typesearch").val("");
});

$(function() {
  $.datepicker.regional["es"] = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    maxDate: "-1D"
  };
  $.datepicker.setDefaults($.datepicker.regional['es']);
  $("#datepicker").datepicker();
});

	function validarFormatoFecha(campo) {
      var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
      if ((RegExPattern.test(campo)) && (campo !='') && (campo.length != 0)) {
            return true;
      } else {
            return false;
		}
	}
	
	function existeFecha(campo) {
        var fechaf = campo.split("/");
        var d = fechaf[0];
        var m = fechaf[1];
        var y = fechaf[2];
        return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
	}
	
	function validarFechaMenorActual(campo) {
      var x = new Date();
      var fecha = campo.split("/");
      x.setFullYear(fecha[2],fecha[1]-1,fecha[0]);
      var today = new Date();
      if (x >= today)
        return false;
      else
        return true;
	}
	
	function validarFechaCompleto(campo) {
		if(validarFormatoFecha(campo) && existeFecha(campo) && validarFechaMenorActual(campo)) {
			return true;
		} else {
			return false;
		}
	}

function EnviarForm() {
  var regexN = /^[a-zA-Z ñ.áéíóúäëïöü']*$/;
  var regexDni = /^([0-9]){8}$/;
  var regexM = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  var nombre = document.getElementById("nombre");
  if (nombre.value && regexN.test(nombre.value) && nombre.value.length >= 10 && nombre.value.length <= 20) {

    var dni = document.getElementById("dni");
    if (dni.value && regexDni.test(dni.value)) {

      var fecha = document.getElementById("datepicker");
      if (validarFechaCompleto(fecha.value)) {

        var mail = document.getElementById("correo");
        if (mail.value && regexM.test(mail.value)) {

          var mensaje = document.getElementById("mensaje");
          if (mensaje.value) {
            var formulario = document.getElementById("formulario");
            formulario.submit();
          } else {
            alert("No ha Ingresado Ningún Mensaje");
            mensaje.focus();
          }

        } else {
          alert("Ingrese un Email Válido");
          mail.focus();
        }

      } else {
        alert("Ingrese una Fecha Válida");
      }
    } else {
      alert("Ingrese un DNI Válido (Número de 8 digitos)");
      dni.focus();
    }

  } else {
    alert("Ingrese un Nombre Válido (10-20 caracteres)");
    nombre.focus();
  }

}

window.onload = function() {
  document.getElementById("nombre").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("datepicker").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("mensaje").value = "";
  var enviar = document.getElementById("bForm");
  enviar.onclick = EnviarForm;
}
