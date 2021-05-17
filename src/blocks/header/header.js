(() => {
	
	let url_hash = window.location.hash.split('#')[1]; 
	let $wrapper = $('.header__top');
	let $menu = $('.header__top-inner');
	let $open = $('.header__menu-open');
	let $header = $('.header');
	let $underlay = $("<span class='header__menu-underlay'></span>").prependTo($header);
	
	// Подложка под меню при наведении
	$('.header__menu-item:not(.active)')
		.has('.header__submenu')
		.on('mouseenter', function(e) {
			let $self = $(this);

			if($self.css('clear') == 'both' && $header.hasClass('header_main')) {
				let box = $self.find('.header__submenu')[0].getBoundingClientRect().bottom;
				$underlay.height(box + 20).stop().fadeIn();
			}
		}).on('mouseleave', function(e) {
			$underlay.stop().fadeOut();
		});

	// Прокрутка вниз	
	$('a.header__scroll[href^="#"]').on('click', function(e) {
		e.stopPropagation();
		e.preventDefault();
		var $element = $($(this).attr('href'));
	
		$('html, body').animate({ scrollTop: $element.offset().top }, 'slow');
	});

	// Меню на маленьких размерах
	$('.header__menu-open, .header__menu-close').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$menu.toggleClass('opened');
		$wrapper.removeAttr('style');
	});

	// Открывать подменю по первому клику, а по второму - переходить по ссылке
	$menu.on('click touchstart', '.header__menu-item_haschild', function(e) {
		var $self = $(this);

		if($open.css('display') !== 'block') return;

		if($self.children('ul').length > 0 && !$self.hasClass('hover')) {
			e.preventDefault();

			$self
				.addClass('hover')
				.siblings()
				.removeClass('hover');
		}
	});	

	$(window).on('click', function(e) {
		if($menu.hasClass('opened') && !e.target.closest('.header__menu')) {
			e.preventDefault();
			$menu.toggleClass('opened');
		}
	});

	if(window.location.pathname.indexOf("/services.") == 0 && url_hash) {
		$(`button[data-hash="${url_hash}"]`).trigger('click');
	}

	$(window).on('hashchange', function name(e) {
		window.location.reload();
	});

})();