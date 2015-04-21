var main = function () {
	var active_btn = 0;
	var active_box = 0;
	$('.guest').click( function(){
		$('.jumbotron .container').hide();
	});

	$('.login').click( function(){
		if (active_btn === 0){
			active_btn = $(this);
			active_btn.addClass('btn-primary');
		} else {
		active_btn.removeClass('btn-primary');
		active_btn.addClass('btn-default');
		active_btn = $(this);
		active_btn.addClass('btn-primary');
		};

		if (active_box === 0){
			active_box = $('.login_box');
			active_box.removeClass('hidden');
		} else {
			active_box.addClass('hidden');
			active_box = $('.login_box');
			active_box.removeClass('hidden');
		};
	});

	$('.signup').click( function(){
		if (active_btn === 0){
			active_btn = $(this);
			active_btn.addClass('btn-primary');
		} else {
			active_btn.removeClass('btn-primary');
			active_btn.addClass('btn-default');
			active_btn = $(this);
			active_btn.addClass('btn-primary');
		};

		if (active_box === 0){
			active_box = $('.signup_box');
			active_box.removeClass('hidden');
		} else {
			active_box.addClass('hidden');
			active_box = $('.signup_box');
			active_box.removeClass('hidden');
		};
	});
};

$(document).ready(main);