$(document).ready(function(){

	/* -- efecto parallax -- */
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.15);
		$('.cover').css({
			'background-position': '0 -' + posicion + 'px'
		});
	});

	/* -- efecto scroll -- */
	$('a#btn_inicio').click(function() {
  		$('html, body').animate({
    		scrollTop: $("div#box_uno").offset().top
  		}, 2000)
	});	

	$('a#btn_nosotros').click(function() {
  		$('html, body').animate({
    		scrollTop: $("section#box_dos").offset().top
  		}, 2000)
	});

	$('a#btn_servicio').click(function() {
  		$('html, body').animate({
    		scrollTop: $("section#box_tres").offset().top
  		}, 2000)
	});

	$('a#btn_contacto').click(function() {
  		$('html, body').animate({
    		scrollTop: $("section#box_cuatro").offset().top
  		}, 2000)
	});		

});