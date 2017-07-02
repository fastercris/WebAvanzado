$(document).ready(function(){
	$("#iraarticulo1").click(function(){
		var posicion=$("#articulo1").offset().top;
		posicion=posicion -60;
		$("html,body").animate({
			scrollTop:posicion
		},800);
		%("algo").animate({
			//Que quiero que haga
		},tiempoenmiliseg,quehagodespues);
	});
})