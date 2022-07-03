$(document).ready(function(){
    function abreFechaFiltros() {
        if( $(window).width() > 768 ) {
            return;
        }

        if( $('.filtros-wrapper').hasClass('aberto') ){
            $('.filtros-wrapper').removeClass('aberto');
            $('.overlay').fadeOut(500);
            $('body').css('overflow', 'auto');
        } else {
            $('.filtros-wrapper').addClass('aberto');
            $('.overlay').fadeIn(500);
            $('body').css('overflow', 'hidden');
        }
    }

    $(document).on('click', '.filtros-icone-wrapper', abreFechaFiltros)
    $(document).on('click', '.overlay', abreFechaFiltros)

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