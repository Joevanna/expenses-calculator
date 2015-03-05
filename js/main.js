var application = (function() {

	function addListItem() {
		$('.list').click(function() {
			var newLi = $('<li>' + ($('input').val()) + '</li>');
			$(this).append(newLi);
		});

		 // = function() {
		 //  var list = document.getElementById('list');
		 //  var newLI = document.createElement('li');
		 //  newLI.innerHTML = 'A new item';
		 //  list.appendChild(newLI);
		 //  setTimeout(function() {
		 //    newLI.className = newLI.className + " show";
		 //  }, 10);
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

