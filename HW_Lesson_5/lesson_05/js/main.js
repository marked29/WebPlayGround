$(document).ready(() => {
    $('.logo-link, .menu-link').click(function(){
        const ID = $(this).attr('href');
        const OFFSET = $(ID).offset().top;
        $('html').animate({
            scrollTop: OFFSET
        }, 1000);
    });
});