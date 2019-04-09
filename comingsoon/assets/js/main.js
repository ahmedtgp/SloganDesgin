/*global $,location,window*/

$(function () {
	'use strict';

	///////////////////////////
	// Preloader
    $('#preloader').delay(3000).fadeOut();
    
    ///////////////////////////
	// Body Fading
    $('h1, a').delay(3000).fadeIn(3000).delay(6000).fadeOut(3000);
    
    ///////////////////////////
	// Tooltip 
    $('[data-toggle="tooltip"]').tooltip();

	///////////////////////////
	// Reload
    setTimeout(function() {
        location.reload();
    }, 15000);
    
});

