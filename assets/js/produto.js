$(document).ready(function(){
    $('.galeria-produto-mobile').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $(document).on('mouseover', '.galeria-produto.desktop img', function(e){
        var src = $(this).attr('src');
        $('.galeria-produto.desktop img').removeClass('atual');
        $(this).addClass('atual');
        $('.foto-principal').attr('src', src);
    })
});