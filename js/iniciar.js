$(document).ready(function(){

	//Este es el menu de todas las paginas
$('header').append( '<nav class="">'+
    '<div class="nav-wrapper ">'+
      '<a href="#!" class="brand-logo" src="">I.E</a>'+
      '<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>'+
     '<ul class="right hide-on-med-and-down">'+
        '<li><a href="sass.html">Home</a></li>'+
        '<li><a href="profesores.html">Profesores</a></li>'+
        '<li><a href="collapsible.html">Eventos</a></li>'+
        '<li><a href="galeria.html">Galeria</a></li>'+
      '</ul>'+
      '<ul class="side-nav" id="mobile-demo">'+
        '<li><a href="sass.html">Home</a></li>'+
        '<li><a href="profesores.html">Profesores</a></li>'+
        '<li><a href="collapsible.html">Eventos</a></li>'+
        '<li><a href="galeria.html">Galeria</a></li>'+
      '</ul>'+
    '</div>'+
  '</nav>')
//Fin del menu

//Iniciar las propiedades de Materializecss
	  $(".button-collapse").sideNav();
	  $('.slider').slider({
	  	height:600,
	  	indicators: false
	  });
	  $('.carousel').carousel();
	  
})


