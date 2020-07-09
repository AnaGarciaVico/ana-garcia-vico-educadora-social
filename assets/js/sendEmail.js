$(function () {
	$('#email-button').on('click', function (event) {
		event.preventDefault();
		var subjectValue = $('#subject').val();
		var emailValue = $('#email').val();
		var messageValue = $('#message').val();
		window.location = 'mailto:garciavicoana@gmail.com?cc=' + emailValue + '&subject=' + subjectValue + '&body=' +   messageValue;
	});
});
