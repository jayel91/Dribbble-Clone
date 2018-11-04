var mainNav = document.getElementById('js-menu');
var navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

$(document).ready(function (){
	var index;
	var gal = $('.gallery');

	function close (){
		$('#lightbox').css('display', 'none');
	}

	function previous(){
		index = index-1;
		if(index < 1){
			index = gal.length;
		}
		$('#image').html("<img src='"+gal[index-1].src+"'>");
	}

	function next(){
		index = index+1;
		if(index > gal.length){
			index = 1;
		}
		$('#image').html("<img src='"+gal[index-1].src+"'>");
	}

	$('.gallery').on('click', function(){
		$('#lightbox').css('display', 'block');
		index = this.id;
		$('#image').html("<img src='"+gal[index-1].src+"'>");
	});

	$("#image").click(function(e){
        e.stopPropagation();
    });

    $(".prev").click(function(e){
        e.stopPropagation();
    });

    $(".next").click(function(e){
        e.stopPropagation();
    });

	$('#close').on('click', close);

	$('#lightbox').on('click', close);

	$('.prev').on('click', previous);

	$('.next').on('click', next);
	
	$('body').on('keypress', function(e){
		if(e.keyCode == 27) {
			close();
		}
		if(e.keyCode == 39) {
			next();
		}
		if(e.keyCode == 37) {
			previous();
		}
	});
});