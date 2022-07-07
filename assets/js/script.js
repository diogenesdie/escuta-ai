$(document).ready(function() {
    $(document).on('click', '.menu.mobile', function(e){
        $('.navegacao').addClass('open');
        $('.overlay').fadeIn(500);
    });

    $(document).on('click', '.overlay', function(e){
        $('.navegacao').removeClass('open');
        $('.overlay').fadeOut(500);
    });

})