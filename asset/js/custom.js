$(document).ready(function() {
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
        });



//Función scroll entre paginas!!
$(document).ready(function () {
	$('.mn').click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});
});


//Funcion para detectar el scroll y cambiar opacidad del menu
$(window).scroll(function(){
	var ancho = $(window).width();
	if($(this).scrollTop() <=50  || ancho <= 700){
		$(".navbar-inverse").css("background","#1A3A40");
		$('.mn').css("color","#FFFFFF");
	}else{
		$('.navbar-inverse').css("background","none");
		$(".navbar").css({
			background: 'rgba(225,242,228, 0.7)',
			color: 'black'
		});
		$('.mn').css("color","black");
	}


});

function getId (dato){
	var cadena  = String(dato);
	var id = cadena.substr((cadena.indexOf('#')+1));
	return id;
}

var ligas = $('.mn');
$('.contenido').mouseover(function() {
	var myId = $(this).attr("id");
	console.log(myId);
	ligas.each(function(i, obj) {
		var dos = getId(obj); 
		console.log(myId+'-'+dos);
		if(myId == dos){
	    	$(this).addClass('activar');
		}else{
	    	$(this).removeClass('activar');
		}
	});
});





	$('#boton').toggle(
	    function () {
                alert('Primera función');
            },
	    function () {
                alert('Segunda función');
            }
    );

$('.navbar-toggle').click(function(){
	var elem = $('.ico-menu');
	elem.toggleClass('glyphicon-menu-hamburger');
	/*
	if(elem.hasClass('menu')){
		elem.removeClass('menu').addClass('open');
		console.log(elem);
	}else{
		elem.addClass('menu');
	}*/
	elem.addClass('otra');
});


function rotar(){
	var a = $('#a');
	var b = $('#b');
	var c = $('#c');
	
	setTimeout(function(){
		a.fadeOut(1000);
	}, 2000);

	setTimeout(function(){
		b.fadeIn(100);
	}, 3000);

	setTimeout(function(){
		b.fadeOut(1000);
	}, 5000);

	setTimeout(function(){
		c.fadeIn(100);
	}, 6000);

	setTimeout(function(){
		c.fadeOut(1000);
	}, 7990);

	setTimeout(function(){
		a.fadeIn(100);
	}, 9000);

	setTimeout(function(){
		rotar();
	}, 11000)

}

rotar();


$('#test').click(function(event) {
	/* Act on the event */
	$(this).css("width","80%");
});