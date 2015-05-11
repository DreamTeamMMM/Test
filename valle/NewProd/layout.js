var main = function() {

	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	$('.signup').click( function() {
		if ($('#signup_box').hasClass('hidden')){
			//remove active box from other boxes
			$('#login_box').removeClass('active_box')
			$('#login_box').addClass('hidden')
			//for this box
			$('#signup_box').removeClass('hidden')
			$('#signup_box').addClass('active_box')
		}else{
			//remove active box from other boxes
			$('#login_box').removeClass('active_box')
			$('#login_box').addClass('hidden')
			//for this box
			$('#signup_box').addClass('hidden')
			$('#signup_box').removeClass('active_box')
		}
	})
	$('.login').click( function() {
		if ($('#login_box').hasClass('hidden')){
			//remove active box from other boxes
			$('#signup_box').removeClass('active_box')
			$('#signup_box').addClass('hidden')
			//for this box
			$('#login_box').removeClass('hidden')
			$('#login_box').addClass('active_box')
		}else{
			//remove active box from other boxes
			$('#signup_box').removeClass('active_box')
			$('#signup_box').addClass('hidden')
			//for this box
			$('#login_box').addClass('hidden')
			$('#login_box').removeClass('active_box')
		}
	})

//------------------------------------------//
// Stop dropdown closing
//Taken from: http://stackoverflow.com/questions/10863821/bootstrap-dropdown-closing-when-clicked
//------------------------------------------//

	$('.dropdown-menu input, .dropdown-menu label').click(function(e) {
        e.stopPropagation();
    });
//------------------------------------------//

	navbarSize(windowWidth);
	//canvasToFullDisplay(windowWidth,windowHeight)
	$(window).resize(function (){
		windowWidth = $(window).width();
		windowHeight = $(window).height();
		navbarSize(windowWidth);
	//	canvasToFullDisplay(windowWidth,windowHeight)
			//$('#right-menu').before('<button class="glyphicon glyphicon-align-right pull-right" </button>');
		}
	);
};

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

