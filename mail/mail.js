$(function() {
	$(".contact-form").submit(function (event) {
		event.preventDefault();

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

				if(fd.get('honeypot').length) {
					return false;
				} else {
					fd.delete('honeypot');
				}

				// Показываем прелоадер
				preloader.css('opacity', '1');

				// Делаем неактивной кнопку отправки
				submitButton.prop('disabled', true);

				// валидация других полей.

			},

		}).done(function(res, textStatus, jqXHR) {

			if(jqXHR.readyState === 4 && jqXHR.status === 200) {

				// Прячем прелоадер
				preloader.css('opacity', '0');
				window.location.replace("/thankyou.php?status=success");
				// Очищаем поля формы
				form.reset();


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