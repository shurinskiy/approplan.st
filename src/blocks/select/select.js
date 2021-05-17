(() => {

	// Стилизовать выпадающий список (первый option только как заголовок)
	$('.js-select').each(function() {
		let $self = $(this);
		let $options = $self.find('option');

		$self.wrap('<div class="select"></div>');
		$self.hide();

		$('<div>', { class: 'select__head', text: 'Заголовок' }).insertAfter($self);
		let $head = $self.next('.select__head');

		$('<ul>', { class: 'select__list' }).insertAfter($head);
		let $list = $head.next('.select__list');

		for (var i = 1; i < $options.length; i++) {
			$('<li>', {
					class: 'select__item',
					html: $('<span>', {
						text: $options.eq(i).text()
					})
				})
				.attr('data-value', $options.eq(i).val())
				.appendTo($list);
		}
		let $items = $list.find('li');

		$head.text($options.eq(0).text());

		$head.on('click', function(e) {
			e.stopPropagation();
			e.preventDefault();
			$(this).toggleClass('select__head_open');
		});

		$(window).on('click', function() {
			if($list.is(':visible')) {
				$head.toggleClass('select__head_open');
			}
		});

		$list.on('click', 'li:not(.select__item_selected)', function(e) {
			$(this)
				.addClass('select__item_selected')
				.siblings()
				.removeClass('select__item_selected');

			$head.text($(this).text());
			$options
			.removeAttr('selected')
			.eq($(this).index() + 1)
			.attr('selected', 'selected')
		});	
	});

})();
