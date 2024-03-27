$(function() {
	$(".contact-form").submit(function (event) {
		event.preventDefault();
		var phoneInput = $('.widget-text-input-phone');
		$(phoneInput).mask('+7 (799) 999-99-99');
		if (!phoneInput.val()) {
			$(".widget-text").addClass("widget-text-shake"), setTimeout(function() {
				$(".widget-text").removeClass("widget-text-shake")
			}, 500), $(".widget-text-input").focus();
		} else if (!/^(\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2})$/.test(phoneInput.val())) { // Проверяем, соответствует ли введенный номер маске
			$(".widget-text").addClass("widget-text-shake"), setTimeout(function() {
				$(".widget-text").removeClass("widget-text-shake")
			}, 500), $(".widget-text-input").focus();
		}

		var bonus = [1,2,3,4,5,6,7,8]
		// Ссылка, которую получили на этапе публикации приложения
		let appLink = "https://script.google.com/macros/s/AKfycbzvk9XpdLE8k7MR4u974KtYgPGxDWOygEnQQCsXq8jRxA9Sov2WhiVMdlnDDB2bG9uKSA/exec";

		// Сообщение при успешной отправке данных
		let successRespond = 'Сообщение успешно отправлено.';

		// Сообщение при ошибке в отправке данных
		let errorRespond = 'Не удалось отправить сообщение.';

		// Id текущей формы
		let form = $('#' + $(this).attr('id'))[0];

		// h2 с ответом формы
		let formRespond = $(this).find('.contact-form__description');

		// Блок прелоадера
		let preloader = $(this).find('.contact-form__preloader');

		// Кнопка отправки формы
		let submitButton = $(this).find('.contact-form__button');

		// FormData
		let fd = new FormData(form);

		$.ajax({

			url: appLink,
			type: "POST",
			data: fd,
			processData: false,
			contentType: false,
			beforeSend: function(){

				$(".widget-text-input").blur(), $(".widget-wheel").removeClass("widget-wheel-wait");
				var t = bonus[Math.floor(Math.random() * bonus.length)];
				$(".widget-wheel").css("animation-name", "anim-spin-" + t),
					$(".widget-page").hide(),
					$(".widget-page-2").show();
			},

		}).done(function(res, textStatus, jqXHR) {

			if(jqXHR.readyState === 4 && jqXHR.status === 200) {

				setTimeout(function() {
					$(".widget-page").hide(),
						$(".widget-page-3").show(),
						$(".widget-page-3 .widget-head").text($(".widget-wheel-text-" + t + " span").text())
				}, 4200);

			} else {
				formRespond.html(errorRespond).css('color', '#c64b4b');
				preloader.css('opacity', '0');
				setTimeout( () => {
					formRespond.css({
						'display': 'none'
					});

					submitButton.prop('disabled', false);
				}, 5000);

				console.log('Гугл не ответил статусом 200');
			}
		}).fail(function(res, textStatus, jqXHR) {
			preloader.css('opacity', '0');
			formRespond.html('Не удалось отправить сообщение. Cвяжитесь с администратором сайта другим способом').css('color', '#c64b4b');
			setTimeout( () => {
				formRespond.css({
					'display': 'none'
				});
				submitButton.prop('disabled', false);
			}, 5000);

			console.log('Не удалось выполнить запрос по указанному в скрипте пути');
		});
	});
}(jQuery));