import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import jQueryBridget from 'jquery-bridget';

jQueryBridget('masonry', Masonry, $);
jQueryBridget( 'imagesLoaded', imagesLoaded, $ );

(() => {

	let $container = $('.grid__items').imagesLoaded(() => {
		$container.masonry({
			itemSelector: '.grid__item',
			columnWidth: '.grid__sizer',
			percentPosition: true
		});
	});

	let $items = $('.grid__items').find('.grid__item');

	$('.grid__buttons').on('click', '.grid__button', function(e) {
		let $self = $(this);
		let target = $self.data('target');
		let $showed = (target == 'all') ? $items : $items.filter(`[data-filter='${target}']`);

		$self.siblings('.grid__button').removeClass('active').end().addClass('active');
		$items.not($showed).addClass('grid__item_hidden');
		$showed.removeClass('grid__item_hidden');
		$container.masonry('layout');
	});

})();