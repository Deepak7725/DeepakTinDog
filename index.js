$(document).ready(function () {
    $("#btnid").click(function () {
        $('html,body').animate({
            scrollTop: $("#pricing").offset().top - 50
        },
            'slow', 'swing');
    });
});