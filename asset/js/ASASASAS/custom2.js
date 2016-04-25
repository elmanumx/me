
//Función scroll entre paginas!!
$(document).ready(function () {
	$('a').click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});
});

//Funcion para detectar el scroll y cambiar opacidad del menu
$(window).scroll(function(){
	var ancho = $(window).width();
	if($(this).scrollTop() <50 && ancho > 800){
		$("header nav ul").css("background","#E8A31E");
	}else{
		$("header nav ul").css("background","rgba(225,242,228, 0.1)");
	}

});

/*
var ancho = $(window).width();
if(ancho>800){
$("#fixd").css("position","fixed");
}
*/
/*
$(window).scroll(function()
		{
			if ($(this).scrollTop() < 10){
				$('nav').removeClass("opacidad");
			}
			else{
				$('nav').addClass("opacidad").fadeIn();
			}
		});
		*/
