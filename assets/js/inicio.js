$(document).ready(function() {
    $('.banner-container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $(document).on('change', '.selecao-cor', function(e){
        var hexadecimal = $(this).data('hexadecimal');
        var cor = $(this).prop('id');
    
        //slide up
        $('.circle').animate({
            'top': '-=100px',
            'opacity': '0'
        }, 500, function(){
            $('.circle').css('background-color', hexadecimal);
            //slide down
            $('.circle').animate({
                'top': '+=100px',
                'opacity': '1'
            }, 500).removeClass('hidden');

        }).addClass('hidden');
        
        $('.fone-apresentacao').fadeOut(500, function(){
            $('.fone-apresentacao').attr('src', './assets/images/fone-sem-fundo-' + cor + '.png');
            $('.fone-apresentacao').fadeIn(500);
        });

    });
});