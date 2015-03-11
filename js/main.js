var application = (function() {

	function addListItem() {
	    var text = $('#listName').val() + '<button class="fa fa-times"></button>';
	    if(text.length){
	        $('<li />', {html: text}).appendTo('ul.justList');
	    }
	}

	function removeListItem() {
		$(this).parent().remove();
	}

	function expenses() {
		var sum = 0;
		$('.justList').find('li').each(function() {
			sum += $(this).text();
			console.log($(this));
		});


		result(sum)
	}


	function result(sum) {

		$('.flipper').addClass('turn');
		$('.figure').html($('.initialSum').val() - sum);

	}


	function events() {
		$('.list').on('click', addListItem);
		$('ul').on('click','button', removeListItem);
		$('.trigger').on('click', expenses);
	}

	function init() {
		events();
	}

	return {
		init: init
	}

})();


$(document).ready(function() {

	application.init();

});

