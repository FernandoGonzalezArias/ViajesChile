$(function() {

    $('[data-toggle="tooltip"]').tooltip();

    $("#navbarSupportedContent ul a").on("click", function(e) {
        e.preventDefault();
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top }, 900);
    });
});