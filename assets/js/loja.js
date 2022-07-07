$(document).ready(function(){
    function abreFechaFiltros() {
        

        if( $('.filtros-wrapper').hasClass('aberto') ){
            
        } else {
        }
    }

    $(document).on('click', '.filtros-icone-wrapper', function(e){
        if( $(window).width() > 768 ) {
            return;
        }

        $('.filtros-wrapper').addClass('aberto');
        $('.overlay').fadeIn(500);
        $('body').css('overflow', 'hidden');
    })
    $(document).on('click', '.overlay', function(e){
        if( $(window).width() > 768 ) {
            return;
        }
        
        $('.filtros-wrapper').removeClass('aberto');
        $('.overlay').fadeOut(500);
        $('body').css('overflow', 'auto');
    })

    $('.banner-container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
})