import 'owl.carousel';

(() => {

	$('.partners__items').owlCarousel({
		loop: true,
		margin: 50,
		dots: false,
		nav: true,
		navText: ['',''],
		navContainer: '.partners__nav',
		navClass: ['partners__prev','partners__next'],
		responsive:{
			780:	{ 
				items: 3,
				margin: 50
			},
			640:	{ 
				items: 2,
				margin: 40
			},
			0:	{ 
				items: 1,
				margin: 30
			}
		}
	});

})();