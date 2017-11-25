$(document).ready(function(){
	$('#nametype').typeIt({
		strings:["Hello", "My name is Ryan", "Click on the buttons below to learn more about me!"],
		speed:50,
		breakLines:false,
		autoStart:false
	});
	$('#button1').click(function() { //jQuery Function Number 1
		$('#about').fadeIn('slow'); //jQuery Function Number 2
		$('#button-container').addClass('.clicked') //jQuery Function Number 3
	});
	$('#button2').click(function() {
		$('#projects').fadeIn('slow');
		$('#button-container').addClass('.clicked') 
	});
	$('#button3').click(function() {
		$('#contact').fadeIn('slow'); 
		$('#button-container').addClass('.clicked') 
	});
	$('.close').click(function() {
		if ($('#button-container').hasClass('.clicked')) { //jQuery Function Number 4
			$('#about').fadeOut('slow'); //jQuery Function Number 5
			$('#projects').fadeOut('slow');
			$('#contact').fadeOut('slow');
			$('#button-container').removeClass('.clicked') //jQuery Function Number 6
		} 
	});
});