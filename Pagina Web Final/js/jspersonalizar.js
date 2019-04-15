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
  $( function() {
  $(".buybutton").click( function agregarAlCarrito() {
		$(".dot").text(++contador);
		$(".dot").fadeIn("slow");
  });
});

function cambiarColor(opcion){
    switch(opcion) {
      case "1":
      $(".foto").attr("src", "img/remera5negra.jpg");
      break;

      case "2":
      $(".foto").attr("src", "img/remera5.jpg");
      break;

      case "3":
      $(".foto").attr("src", "img/remera5azul.jpg");
      break;

      case "4":
      $(".foto").attr("src", "img/remera5roja.jpg");
      break;
    }
}
