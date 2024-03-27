$(document).ready(function() {
    var phoneInput = $('.widget-text-input-phone');
    $(phoneInput).mask('+7 (799) 999-99-99');
    function e() {
        mask_phone.isValidNumber() ? n(mask_phone.getNumber()) : ($(".widget-text").addClass("widget-text-shake"), setTimeout(function() {
            $(".widget-text").removeClass("widget-text-shake")
        }, 500), $(".widget-text-input").focus())
    }
    function n(e) {
        $(".widget-text-input").blur(), $(".widget-wheel").removeClass("widget-wheel-wait");
        var t = bonus[Math.floor(Math.random() * bonus.length)];
        $(".widget-wheel").css("animation-name", "anim-spin-" + t),
            $(".widget-page").hide(),
            $(".widget-page-2").show(),
            setTimeout(function() {
                $(".widget-page").hide(),
                $(".widget-page-3").show(),
                    $(".widget-page-3 .widget-head").text($(".widget-wheel-text-" + t + " span").text())
        }, 6300),
            $.post("send.php", {
            hash: hash,
            lead: e,
            bonus: $(".widget-wheel-text-" + t + " span").text(),
            browser: JSON.stringify($.pgwBrowser()),
            u: u
        }),
            window.parent.postMessage("lp9_done", "*"), ymtr > 0 && (ym(ymtr, "reachGoal", "lp9_send"), console.log("ym_lp9_send")), gatr.length > 0 && (ga("send", "lp9_send"), console.log("ga_lp9_send"))
    }
    $(".widget-text-input-phone").length > 0 ? (mask_phone = window.intlTelInput($(".widget-text-input-phone")[0], {
        utilsScript: "https://lp9.ru/js/intlTelInput_utils.js",
        initialCountry: region,
        preferredCountries: ["ru", "ua", "by", "kz"]
    }),
        $(".widget-btn-1").click(function() {
        e()
    }), $(".widget-text-input-phone").on("keydown", function(t) {
        13 === t.keyCode && e()
    })) : $(".widget-text-input-mail").length > 0 ? ($(".widget-btn-1").click(function() {
        t()
    }), $(".widget-text-input-phone").on("keydown", function(e) {
        13 === e.keyCode && t()
    })) : $(".widget-btn-1").click(function() {
        n("")
    }), $(".widget-btn-2").click(function() {
        window.parent.postMessage("lp9_close", "*")
    }), $(".widget-wheel").addClass("widget-wheel-wait"), ymtr > 0 && (ym(ymtr, "reachGoal", "lp9_open"), console.log("ym_lp9_open")), gatr.length > 0 && (ga("send", "lp9_open"), console.log("ga_lp9_open"))
});