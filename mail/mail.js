$(function() {
	$(".contact-form__button").click(function (event){
		var phoneInput = $('.widget-text-input-phone');
		var phoneNumber = phoneInput.val();
		if (!phoneNumber) {
			$(".widget-text").addClass("widget-text-shake"), setTimeout(function() {
				$(".widget-text").removeClass("widget-text-shake")
			}, 500),
				$(".widget-text-input").focus();
				event.preventDefault();
		} else if (phoneNumber.length < 17) {
			$(".widget-text").addClass("widget-text-shake"), setTimeout(function() {
				$(".widget-text").removeClass("widget-text-shake")
			}, 500),
				$(".widget-text-input").focus();
				event.preventDefault();
		}
	})
	$(".contactFormWheel").submit(function (event) {
		event.preventDefault();
		var bonus = [1,2,8]
		var t = bonus[Math.floor(Math.random() * bonus.length)];
		// Ссылка, которую получили на этапе публикации приложения
		let appLink = "https://script.google.com/macros/s/AKfycbxbPL5pNOUmMAoJIqe_V8KJEbdgo8UPa1zJVrbc3KV4PV1O8o91RwDwQyZ4Ltu1gt6FsA/exec";

		// Создаем или обновляем скрытое поле для .widget-head
		var updatedWidgetHeadValue = $(".widget-wheel-text-" + t + " span").text();
		$(".widget-page-3 .widget-head").text(updatedWidgetHeadValue);
		var hiddenInput = $('<input>').attr({
			type: 'hidden',
			name: 'Приз', // Установите имя поля, которое будет читаться на сервере
			value: updatedWidgetHeadValue
		});
		$(this).append(hiddenInput); // Добавляем скрытое поле к форме перед отправкой

		// Создаем или обновляем скрытое поле для имени заявки
		var hiddenInputName = $('<input>').attr({
			type: 'hidden',
			name: 'Имя', // Установите имя поля, которое будет читаться на сервере
			value: 'Виджет-колесо'
		});
		$(this).append(hiddenInputName); // Добавляем скрытое поле к форме перед отправкой

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
				$(".widget-wheel").css("animation-name", "anim-spin-" + t),
					$(".widget-page").hide(),
					$(".widget-page-2").show();
			},

		}).done(function(res, textStatus, jqXHR) {
			if(jqXHR.readyState === 4 && jqXHR.status === 200) {

				setTimeout(function() {
					$(".widget-page").hide();
					$(".widget-page-3").show();
				}, 3200);

				$('.widget-activator').css({
					'display': 'none'
				})

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