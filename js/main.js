// меню языка //
$(document).ready(function() {
    $('.header__menu').mouseover(function(event) {
        $('.lang__menu').toggleClass('active');
    });
});

// Эффект магнита//
$(document).ready(function() {
    var container = $(".wrap");
    var text = $(".main-text");
function showAllObjects (object) {
		object.fadeIn(900);
}
function moving (object, speed) {
	container.on('mousemove', function(event) {
		var X = Math.floor((event.pageX)/speed) + "px";
    	var Y = Math.floor((event.pageY)/speed) + "px";	
    	object.css('transform', 'translate('+X+' , '+Y+')');
	});
}
function moveAll (object) {
	moving($(object[0]),20);
}
showAllObjects(text);
moveAll(text);
});

//бегущая строка//
$(function() {
    $('.diagonal-lines__item').marquee({
      duration: 30000,
      startVisible: true,
      duplicated: true
    });
  });