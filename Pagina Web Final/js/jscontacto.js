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

$(function limpiarFormulario() {
  $(".itemform").val("");
});

$( function() {
	$.datepicker.regional[ "es" ] = {
		closeText: 'Cerrar',
		prevText: '< Ant',
		nextText: 'Sig >',
		currentText: 'Hoy',
		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
		dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
		dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
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

$(function validacionFormulario() {

	function validarNombre() {
		var regex = /^[a-zA-Z ñ.áéíóúäëïöü']*$/;
		var nombreUser = $("#nombre").val();
		var resRegEx = regex.test(nombreUser);
		if (nombreUser != "" && !resRegEx || (nombreUser.length != 0 && (nombreUser.length<10 || nombreUser.length>20))) {
			$("#mensaje1").fadeIn("slow");
			return false;
		} else if (nombreUser == "" && nombreUser.length == 0) {
			$("#mensaje1").fadeOut();
			return false;
		} else if (nombreUser != "" && nombreUser.length != 0 && resRegEx && (nombreUser.length >= 10 && nombreUser.length <= 20)) {
			$("#mensaje1").fadeOut();
			return true;
		}
	}

	function validarDni() {
		var regex = /^([0-9]){8,8}$/;
		var numDni = $("#dni").val();
		var resRegEx = regex.test(numDni);
		if (numDni != "" && numDni.length != 0 && !resRegEx) {
			$("#mensaje2").fadeIn("slow");
			return false;
		} else if (numDni == "" && numDni.length == 0) {
			$("#mensaje2").fadeOut();
			return false;
		} else if (numDni != "" && numDni.length != 0 && resRegEx) {
			$("#mensaje2").fadeOut();
			return true;
		}
	}
	
	function validarFormatoFecha() {
      var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
      if ((RegExPattern.test($("#datepicker").val())) && ($("#datepicker").val() !='') && ($("#datepicker").length != 0)) {
            return true;
      } else {
            return false;
		}
	}
	
	function existeFecha() {
        var fechaf = $("#datepicker").val().split("/");
        var d = fechaf[0];
        var m = fechaf[1];
        var y = fechaf[2];
        return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
	}
	
	function validarFechaMenorActual() {
      var x = new Date();
      var fecha = $("#datepicker").val().split("/");
      x.setFullYear(fecha[2],fecha[1]-1,fecha[0]);
      var today = new Date();
      if (x >= today)
        return false;
      else
        return true;
	}
	
	function validarFechaCompleto() {
		if(validarFormatoFecha() && existeFecha() && validarFechaMenorActual()) {
			$("#mensaje3").fadeOut();
			return true;
		} else {
			$("#mensaje3").fadeIn("Slow");
			return false;
		}
	}

	function validarMail() {
		var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var mail = $("#correo").val();
		var resRegEx = regex.test(mail);
		if (mail != "" && mail.length != 0 && !resRegEx) {
			$("#mensaje4").fadeIn("slow");
			return false;
		} else if (mail == "" && mail.length == 0) {
			$("#mensaje4").fadeOut();
			return false;
		} else if (mail != "" && mail.length != 0 && resRegEx) {
			$("#mensaje4").fadeOut();
			return true;
		}
	}
	
	function validarObservaciones() {
		if($("#mensaje").val() === "") {
			$("#mensaje5").fadeIn("Slow");
			return false;
		} else {
			$("#mensaje5").fadeOut();
			return true;
		}
	}

  $("#nombre").keyup(validarNombre);

  $("#dni").keyup(validarDni);
  
  $("#datepicker").keyup(validarFechaCompleto);
  
	$("#datepicker").change(validarFechaCompleto);

  $("#correo").keyup(validarMail);
  
  $("#mensaje").keyup(validarObservaciones);
  
  $("#nombre,#dni,#datepicker,#correo,#mensaje").focusin( function() {
	  $("#mensaje6").fadeOut();
  });

  $("#bForm").click(function validarFormulario() {
	if(validarNombre() && validarDni() && validarFechaCompleto() && validarMail() && validarObservaciones()) {
		$("#mensaje6").fadeOut();
		$(".formulario").submit();
	} else {
		$("#mensaje6").fadeIn("Slow");
		return false;
    }
  });
});
