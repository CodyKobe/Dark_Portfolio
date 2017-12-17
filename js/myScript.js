$(document).ready(function () {

    $(window).on("orientationchange", function() {
        alert("The orientation has changed!");
		portrait();
    });
	portrait();
	function portrait(){
		if(	window.innerHeight > window.innerWidth ){
			$('.img-col').addClass('hide');
		} else {
			$('.img-col').removeClass('hide');
		}
	}

    $('#wyslij').click(function () {

        var imie = $('#imie').val();
        var email = $('#email').val();
        var textarea = $('#textarea').val();

        var imieV = false;
        var emailV = false;
        var textareaV = false;

        $('#kontakt .error').remove();

        if (imie.length > 2) {
            imieV = true;
        } else {
            imieV = false;
            $('#imie').after("<p class='error'>Podaj swoje imię</p>");
        }

        var wzorMaila = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
        //		metoda test jest dla wyrazen regularnych
        if (wzorMaila.test(email)) {
            emailV = true;
        } else {
            $('#email').after("<p class='error'>Podaj swój email</p>");
        }

        if (textarea.length > 5) {
            textareaV = true;
        } else {
            $('#textarea').after("<p class='error'>Twoje pytanie</p>");
        }

        if (imieV && emailV && textareaV) {

            var obj = {
                imie: imie,
                email: email,
                text: textarea
            };
            var sendValue = $.param(obj);

            console.log(sendValue);

            $('.onSend').removeClass('hidden');

            $.ajax({
                method: "POST",
                url: "send.php",
                data: sendValue,
                // gotowy naglowek dla wyslania ajax przez czysty php
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).done(function (data) {
                if (data == 1) {
                    $('.onSend').addClass('hidden');
                    $('.sent').removeClass('hidden');
                }
                console.log(data);
            });
        }
    });
});
