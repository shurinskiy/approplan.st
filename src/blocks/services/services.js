(() => {

	$('.services').on('click', '.services__button:not(.active)', function(e) {
		e.preventDefault();
		var $self = $(this);
	
		$self
			.addClass('active')
			.siblings()
			.removeClass('active');

		$self
			.parents('.services')
			.find('.services__items')
			// .removeClass('active')
			.hide()
			.eq($self.index())
			.fadeIn();
			// .addClass('active');
	});

})();
