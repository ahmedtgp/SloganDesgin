/*
Script Name: Slogan-IT Web
Author: Ahmed Nasser

Table OF Contents
------------------------------------
01 > Nice Scroll

02 > Preloader

03 > Scroll Spy

04 > Smooth Scroll

05 > Btn new Collapse

06 > Mobile dropdown

07 > on scroll
	-fixed nav
	-back to top 

08 > owl carousel
	-about slider
	-testmonial slider
	-team slider

09 > wow Scroll Effect

10 > mixItUp

11 > Number Counter
------------------------------------*/

/*global $,location,window*/

$(function () {
	'use strict';

	///////////////////////////
	// Nice Scroll
    $('body, .timeline-modal').niceScroll({
        cursorcolor: "#a26f10",
        cursorwidth: "5px",
		cursorborder: "1px solid #eee",
		horizrailenabled:false
	});

	///////////////////////////
	// Preloader
	$("#preloader").delay(3000).fadeOut();

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("header a[href^='#'], .timeline a[href='#contact']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});
	$('.contact').magnificPopup({
		delegate: '.lightbox',
		type: 'iframe'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : true,
		autoplayTimeout:5000,
		animateOut: 'rotateOutDownLeft',
		animateIn: 'rotateInDownRight',
		responsive:{
			0: {
				items:1
			}
		}
	});

	$('#team-slider').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass: true,
		dots : false,
		nav: true,
		autoplay : true,
		animateOut: 'rollOut',
		animateIn: 'rollIn',
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:3,
			}
		}
	})

	///////////////////////////
	// Wow Effect 
	$(window).scroll(function() {
		$(".slideanim").each(function(){
		  var pos = $(this).offset().top;
		  var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
			  $(this).addClass("slide");
			}
		});
	});

	///////////////////////////
	// MixItUp
	var mixer = mixitup('#portfolio .container');
	$('.mixerButton').click(function () {
		$(this).addClass('mixerActive').siblings().removeClass('mixerActive');
	});

	///////////////////////////
	// Numbers counter
	$(window).scroll(function() {
		$(".counter").each(function(){
		  var pos = $(this).offset().top;
		  var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
			  $(this).addClass("slide");
			  $(this).countTo();
			}
		});
	});

});

