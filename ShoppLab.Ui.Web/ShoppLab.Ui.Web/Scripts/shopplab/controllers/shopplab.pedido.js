
function salvar() {

    lstDetalhePedido = [];

    //var form = $("form-pedido").serializeObject();
    //$.ajax({ url: "/Pedido/Cadastrar", data: { idProjeto: idProjeto, idStatus: idStatusTipoProjeto } }).success(function (data) {

    //});


    if ($("#form-pedido").valid()) {

        //Verifica os itens da grid
        var id = 0;
        var descricaoProduto = "";
        var marca = "";
        var unidade = "";
        var quantidadeProduto = 10;
        var valorUnitario = 11;
        var valorUnitarioMinimo = 12;
        var valorTotal = 13;
        var valorComissaoBroker = 14;
        var valorPrecoVendaUnitario = 15;
        var valorPreCompra = 16;
        var valorDespesasCompra = 17;
        var percentualIcms = 18;
        var percentualIcmsEntrada = 19;
        var percentualIcmsSaida = 20;
        var percentualIPICompra = 21;
        var percentualIPIVenda = 22;
        var numeroDiasPrazoEntrega = 23;
        var numeroDiasCondicoesPagamentoCompra = 24;
        var NumeroDiasCondicoesPagamentoVenda = 25;


        if (lstDetalhePedido == null) lstDetalhePedido = [];


        listaServicoProjeto.push(
            {
                Id = id,
                DescricaoProduto = descricaoProduto,
            });


    }



}

function validarCampos() {

}