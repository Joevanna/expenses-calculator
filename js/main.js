var application = (function() {

	function outputUpdate() {
		$('.output').val($(this).val() + '%');
	}

	function changeClass() {
		$('.buttons button').removeClass('active');
		$(this).addClass('active');
	}

	function noNegative(e) {
		
		if (e.which == 45 ) {
			e.preventDefault();
		} else {
			$('.trigger').removeAttr('disabled');
		}

	}

	function enableButton() {
		$('.list').removeAttr('disabled');
	}

	function addListItem() {
	    var text = $('#listName').val() + '<button class="fa fa-times"></button>';
	    if(text.length){    	
	        $('<li />', {html: text}).appendTo('ul.justList');
	        $('#listName').val('');

	    }

	    $('.list').attr("disabled","disabled");
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

	function result(sum, e) {

		var initialSum = $('.initialSum').val(),
			percentage = $('#percent').val(),
			finalTot = initialSum - sum,
			percentage = (finalTot / 100) * percentage;

		setTimeout(function() {
			$('.flipper').addClass('turn');
		}, 1000);
		
		if ($('.daily').hasClass('active')) {

			$('.figure').html(percentage.toFixed(2) / 30);
			$('.your-result .d').first().show();

		} else if ($('.weekly').hasClass('active')) {

			$('.figure').html(percentage.toFixed(2) / 4);
			$('.your-result .w').show();

		} else if ($('.monthly').hasClass('active')) {

			$('.figure').html(percentage.toFixed(2));
			$('.your-result .m').show();

		}
	}

	function startOver() {
		location.reload();
	}

	function events() {
		$('#percent').on('change', outputUpdate);
		$('.initialSum').on('keypress', noNegative);
		$('#listName').on('keypress', enableButton);
		$('.list').on('click', addListItem);
		$('ul').on('click','button', removeListItem);
		$('.trigger').on('click', expenses);
		$('.buttons button').on('click', changeClass);
		$('.refresh').on('click', startOver);
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

