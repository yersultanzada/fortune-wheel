$(document).ready(function(){
    $('#testModal').on('hidden.bs.modal', function (e) {
        $('body').removeClass('js-no-scroll')
    });
    $('#testModal').on('shown.bs.modal', function (e) {
        $('body').addClass('js-no-scroll')
    });
});