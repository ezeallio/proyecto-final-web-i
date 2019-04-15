$( function autocompletadoBarraBusq() {
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
        results: function() {}
      }
    });
  } );

  $( function limpiarBarraBusq() {
	  $(".typesearch").val("");
  });

  $( function() {
    $('#slider1').tinycarousel({ interval: true });
  });

	function calcularTotal() {
		var sumador = parseInt($(".total1").text()) + parseInt($(".total2").text()) + parseInt($(".total3").text()) + parseInt($(".total4").text());
		$(".totaltotal").html("$" + sumador);
	}
	
	function validarCantProductos() {
		if(!$(".cantidad1").spinner("isValid") || !$(".cantidad2").spinner("isValid") || !$(".cantidad3").spinner("isValid") || !$(".cantidad4").spinner("isValid")) {
			alert("Numero Inválido");
			return false;
		}
		return true;
	}

$( function() {
	
	$(".cantidad1,.cantidad2,.cantidad3,.cantidad4").keyup(validarCantProductos);
	
	$(".cantidad1").spinner({
    min: 1,
    stop: function() {
      var cantidad = $("#1").val();
      var precio = $(".precio1").text();
      var total = parseInt(cantidad) * parseInt(precio);
      $(".total1").html(total);
	  calcularTotal();
    }
  }).val(1);
  
  $(".cantidad2").spinner({
    min: 1,
    stop: function() {
      var cantidad = $("#2").val();
      var precio = $(".precio2").text();
      var total = parseInt(cantidad) * parseInt(precio);
      $(".total2").html(total);
	  calcularTotal();
    }
  }).val(1);
  
  $(".cantidad3").spinner({
    min: 1,
    stop: function() {
      var cantidad = $("#3").val();
      var precio = $(".precio3").text();
      var total = parseInt(cantidad) * parseInt(precio);
      $(".total3").html(total);
	  calcularTotal();
    }
  }).val(1);
	
  $(".cantidad4").spinner({
    min: 1,
    stop: function() {
      var cantidad = $("#4").val();
      var precio = $(".precio4").text();
      var total = parseInt(cantidad) * parseInt(precio);
      $(".total4").html(total);
	  calcularTotal();
    }
  }).val(1);
  
	$(".total1,.total2,.total3,.total4").ready(calcularTotal);
});



	