$(document).ready(function(e){
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#celular').mask('(00) 00000-0000');
    $('#numero-cartao').mask('0000 0000 0000 0000');
    $('#data-nascimento').mask('00/00/0000');
    
    $('.proximo').on('click', function(e){
        var proximo_form = $('.dados-wrapper.atual').next('.dados-wrapper');

        if(proximo_form.length > 0){
            $('.dados-wrapper.atual').removeClass('atual');
            proximo_form.addClass('atual');
        } else {
            window.location.href = './pedido.html';
        }

        $('.checkout-titulo').html(proximo_form.data('titulo'));

    });

    $('.anterior').on('click', function(e){
        var anterior_form = $('.dados-wrapper.atual').prev('.dados-wrapper');

        if(anterior_form.length > 0){
            $('.dados-wrapper.atual').removeClass('atual');
            anterior_form.addClass('atual');
        } else {
            window.location.href = './carrinho.html';
        }
        
        $('.checkout-titulo').html(anterior_form.data('titulo'));
    })

    $(document).on('change', '.tipo-pagamento', function(e){
        var tipo_pagamento = $(this).val();
        var form_pagamento = $('.form-pagamento');

        $('.tipo-pagamento-label').removeClass('selecionado');
        $(this).parent().addClass('selecionado');    

        if(tipo_pagamento == 'cartao-credito'){
            form_pagamento.show();
        }else{
            form_pagamento.hide();
        }
    }); 
})