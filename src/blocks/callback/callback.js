(() => {

	let $callback = $('.callback__form');

	$('.callback__open, .callback__close').on('click', function(e) {
		$callback.fadeToggle();
	});

	$callback.on('click', function(e) {
		if(!e.target.closest('.callback__form-inner'))
			$callback.fadeOut();
	});

})();