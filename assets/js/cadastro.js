const nome = $( '#nome' );
const email = $( '#email' );
const senha = $( '#senha');
const senhaConfirmacao = $( '#senhaConfirm');
const rg = $( '#rg' );
const cep = $( '#cep' );
const botao = $( '#btnCadastro' );
const test = '41185210';

botao.on( 'click', function(event) {
    event.preventDefault();
   
    const busca = cep.val();

    $.getJSON(`https://viacep.com.br/ws/${busca}/json/`, ( cep ) => {
        console.log( cep )
        $( '#cep' ).val( cep.cep )
        $( '#rua' ).val( cep.logradouro );
        $( '#bairro' ).val( cep.bairro );
        $( '#cidade' ).val( cep.localidade );
        $( '#uf' ).val( cep.uf );
    })
          
})




