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


  var contador = 0;
  $(document).ready( function() {
  $(".buybutton").click( function agregarAlCarrito() {
		$(".dot").text(++contador);
		$(".dot").fadeIn("slow");
  });
});
