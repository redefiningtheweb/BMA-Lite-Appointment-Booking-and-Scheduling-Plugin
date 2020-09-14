(function( $ ) {
	'use strict';

	$(function() {

		$(document).on( 'click', '.rtwbmal_add_new_button', function(){
			$(document).find('.rtwbmal_appoint_name').val('');
			$(document).find('.rtwbmal_appointment_status').val('').change();
			$(document).find('.rtwbmal_subject').val('');
			$(document).find('#rtwbmal_notification_option').val('');

			$(document).find('.rtwbmal_statuss').val('').change();
			$(document).find('.rtwbmal_receipients').val('').change();

			$(document).find('.rtwbmal_save_or_edit').val('save');
			$(document).find('.rtwbmal_save').text('Save');
		});

		$(document).on('click', '.rtwbmal_selected', function(){
			$(this).select();
		});
	});

})( jQuery );