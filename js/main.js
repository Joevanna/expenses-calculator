var application = (function() {

	function changeClass() {
		$('.buttons button').removeClass('active');
		$(this).addClass('active');
	}

	function addListItem() {
	    var text = $('#listName').val() + '<button class="fa fa-times"></button>';
	    if(text.length){
	        $('<li />', {html: text}).appendTo('ul.justList');
	        $('#listName').val('');
	    }
	}

	function removeListItem() {
		$(this).parent().remove();
	}

	function expenses() {
		var sum = 0;

		$('.justList').find('li').each(function() {
			sum += parseInt($(this).text(), 10);
			
		});

		


		result(sum)
	}

	function result(sum) {

		var initialSum = $('.initialSum').val(),
			finalTot = initialSum - sum,
			percentage = (finalTot / 100) * 10;

		setTimeout(function() {
			$('.flipper').addClass('turn');
		}, 1000);
		
		if ($('.daily').hasClass('active')) {

			$('.figure').html(percentage.toFixed(2) / 30);
			$('.your-result p').first().show();

		} else if ($('.weekly').hasClass('active')) {

			$('.figure').html(percentage.toFixed(2) / 4);
			$('.your-result p:nth-child(odd)').show();

		} else if ($('.monthly').hasClass('active')) {

			$('.figure').html(percentage.toFixed(2));
			$('.your-result p').last().show();

		} 			
	}

	function events() {
		$('.list').on('click', addListItem);
		$('ul').on('click','button', removeListItem);
		$('.trigger').on('click', expenses);
		$('.buttons button').on('click', changeClass);
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

