(() => {

	$('.feedback__textarea').on('input', function(e) {
		let $self = $(this);
		$self.css({'height': $self.prop('scrollHeight')});
	});

})();
