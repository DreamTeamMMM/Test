var main = function() {

	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	$('.signup').click( function() {
		if ($('.signup_box').hasClass('hidden')){
			//remove active box from other boxes
			$('.login_box').removeClass('active_box')
			$('.login_box').addClass('hidden')
			//for this box
			$('.signup_box').removeClass('hidden')
			$('.signup_box').addClass('active_box')
			$('.formular').removeClass('hidden')
			centeringFormular('.signup_box');
		}else{
			//remove active box from other boxes
			$('.login_box').removeClass('active_box')
			$('.login_box').addClass('hidden')
			//for this box
			$('.signup_box').addClass('hidden')
			$('.signup_box').removeClass('active_box')
			$('.formular').addClass('hidden')
		}
	})
	$('.login').click( function() {
		if ($('.login_box').hasClass('hidden')){
			//remove active box from other boxes
			$('.signup_box').removeClass('active_box')
			$('.signup_box').addClass('hidden')
			//for this box
			$('.login_box').removeClass('hidden')
			$('.login_box').addClass('active_box')
			$('.formular').removeClass('hidden')
			centeringFormular('.login_box');
		}else{
			//remove active box from other boxes
			$('.signup_box').removeClass('active_box')
			$('.signup_box').addClass('hidden')
			//for this box
			$('.login_box').addClass('hidden')
			$('.login_box').removeClass('active_box')
			$('.formular').addClass('hidden')
			
		}
	})

$("#room-number").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("form").submit();
    }
});
//------------------------------------------//
// Stop dropdown closing
//Taken from: http://stackoverflow.com/questions/10863821/bootstrap-dropdown-closing-when-clicked

	$('.dropdown-menu input, .dropdown-menu label').click(function(e) {
        e.stopPropagation();
    });
//------------------------------------------//
	
    $('#information').click( function(){
        $('.menu').animate({left: '0px'},200);
        $('#jumbotron').animate({left: '285px'},200);
    });
    $('.icon-close').click( function(){
        $('.menu').animate({left: '-285px'},200);
        $('#jumbotron').animate({left: '0px'},200);
    });    

	$('.formular').click( function(){
		$('.formular').addClass('hidden')
		$('.login_box').removeClass('active_box')
		$('.login_box').addClass('hidden')
		$('.signup_box').removeClass('active_box')
		$('.signup_box').addClass('hidden')
	});
	//navbarSize(windowWidth);
	$(window).resize(function (){
		windowWidth = $(window).width();
		windowHeight = $(window).height();
		//navbarSize(windowWidth);
		centeringFormular('.active_box')

	}
	);
};

var centeringFormular = function (id) {
	var verticalHeight = $(id).outerHeight();
	var parentHeight = $('.formular').height();
	var marginHeight = parentHeight - verticalHeight;
	$(id).css({"margin-top": marginHeight/2, "margin-bottom": marginHeight/2})
}

var navbarSize = function (windowSize) {
	if (windowSize <= 768){
		//$('.navbar').css("background-color", "yellow");
		//$('.navbar').addClass("test");
		$('#right-menu').addClass('hidden');			
		$('#right-menu-mobile').removeClass('hidden');
	} else {
		//$('.navbar').css("background-color", "red");
		//$('.navbar').addClass("test");
		$('#right-menu').removeClass('hidden');			
		$('#right-menu-mobile').addClass('hidden');
	};
};

var resultDisplay = function (windowSize) {
	if (windowSize <= 768){
		//$('.navbar').css("background-color", "yellow");
		//$('.navbar').addClass("test");
		$('#right-menu').addClass('hidden');			
		$('#right-menu-mobile').removeClass('hidden');
	} else {
		//$('.navbar').css("background-color", "red");
		//$('.navbar').addClass("test");
		$('#right-menu').removeClass('hidden');			
		$('#right-menu-mobile').addClass('hidden');
	};
};

var signUpBox = function() {
	$('.signup_box').onClick( function() {
		$('.signup_box').removeClass('hidden')
	})
}
$(document).ready(main);

