var application = (function() {

	function addListItem() {
		$('.list').click(function(){
		    var text = $('#listName').val() + '<button class="fa fa-times"></button>';
		    if(text.length){
		        $('<li />', {html: "£ " + text}).appendTo('ul.justList');
		    }
		});

		$('ul').on('click','button' , function(el){
		    $(this).parent().remove();
		});
	}

	function init() {
		addListItem();

	}

	return {
		init: init
	}

})();


$(document).ready(function() {

	application.init();

});

