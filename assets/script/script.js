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
		if ($('#projects').hasClass('.clicked')) {
			$('#pview1').fadeOut('slow');
			$('#pview2').fadeOut('slow');
			$('#pview3').fadeOut('slow');
			$('#pview4').fadeOut('slow');
			$('#pview5').fadeOut('slow');
			$('#pview6').fadeOut('slow');
			$('#projects').removeClass('.clicked');
		} 
		else if ($('#button-container').hasClass('.clicked')) { //jQuery Function Number 4
			$('#about').fadeOut('slow'); //jQuery Function Number 5
			$('#projects').fadeOut('slow');
			$('#contact').fadeOut('slow');
			$('#button-container').removeClass('.clicked') //jQuery Function Number 6
		}
	});
	$('#project1').click(function() {
		$('#pview1').fadeIn('slow');
		$('#projects').addClass('.clicked');
	});
	$('#project2').click(function() {
		$('#pview2').fadeIn('slow');
		$('#projects').addClass('.clicked');
	});
	$('#project3').click(function() {
		$('#pview3').fadeIn('slow');
		$('#projects').addClass('.clicked');
	});
	$('#project4').click(function() {
		$('#pview4').fadeIn('slow');
		$('#projects').addClass('.clicked');
	});
	$('#project5').click(function() {
		$('#pview5').fadeIn('slow');
		$('#projects').addClass('.clicked');
	});
	$('#project6').click(function() {
		$('#pview6').fadeIn('slow');
		$('#projects').addClass('.clicked');
	});
	$('#fb').click(function() {
		window.open('https://www.facebook.com');
	});
	$('#tw').click(function() {
		window.open('https://www.twitter.com');
	})
});