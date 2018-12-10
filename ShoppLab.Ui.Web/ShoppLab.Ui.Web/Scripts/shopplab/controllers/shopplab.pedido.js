

var id = 0,
    descricaoProduto,
    marca,
    unidade,
    quantidadeProduto,
    valorUnitario,
    valorUnitarioMinimo,
    valorTotal,
    valorComissaoBroker,
    valorPrecoVendaUnitario,
    valorPrecoCompra,
    valorDespesasCompra,
    percentualIcms,
    percentualIcmsEntrada,
    percentualIcmsSaida,
    percentualIPI,
    percentualIPICompra,
    percentualIPIVenda,
    numeroDiasPrazoEntrega,
    numeroDiasCondicoesPagamentoCompra,
    numeroDiasCondicoesPagamentoVenda,

    valorCusto = 0,
    valorCustoTT = 0,
    valorCustoTTFrete = 0,
    valorCustoFixo = 0,
    valorCoefFrete = 0,
    valorMkp = 1,
    valorPrecoVendaCif = 0,
    valorFreteDda = 0,
    soma = 0,

    valorPis = 0.65,
    valorCofins = 3,
    valorContaSocial = 1.08,
    valorIrpj = 1.32,
    valorComissaoVendedor = 1,
    valorFinanceiroProRata = 0


    pedido,
    tableName = "#table-detalhe-pedido",
    urlPedido = "/Pedido/Cadastrar",
    formName = "#form-pedido",
    detalhePedido = []


function salvar() {

    if (validarDadosPedido())
        return;

    //if ($(formName).valid()) {

    var data = $(formName).serializeObject();
    $.ajax({
        cache: false,
        url: urlPedido,
        type: 'POST',
        data: JSON.stringify({ model: data, detalhePedidos: detalhePedido }),
        contentType: 'application/json; charset=utf-8',
        async: true,
        success: function (data) {

        }
    });
    //}
}

function validarDadosPedido() {

    //Verificar se existem item no pedido
    var table = $(tableName).DataTable();
    if (!table.data().count()) {
        alert('Por favor, adicionar um item ao pedido');
    }
}

function formatarGridPedido() {

    var table = $(tableName).DataTable({
        scrollY: "600px",
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        columnDefs: [
            { width: '20%' }
        ],

    });
}

function adicionarItem() {

    if (detalhePedido.length == 0) {
        detalhePedido = [];
    }

    quantidadeProduto = $('#input-quantidade').val();
    unidade = $('#input-unidade').val();
    descricaoProduto = $('#input-produto').val();
    marca = $('#input-marca').val();
    valorUnitarioMinimo = $('#input-valorUnitarioMinimo').val();
    valorPrecoVendaUnitario = (parseFloat(valorCusto) / parseFloat(valorMkp)) + parseFloat(valorPrecoVendaCif);
    valorUnitario = valorPrecoVendaUnitario;
    valorTotal = parseFloat(valorUnitario) * parseFloat(quantidadeProduto);
    percentualIcmsSaida = $('#input-icmsSaida').val();
    percentualIcms = parseFloat(percentualIcmsSaida);
    numeroDiasPrazoEntrega = $('#input-prazoEntregaDias').val();
    valorPrecoCompra = $('#input-precoCompra').val();
    percentualIcmsEntrada = $('#input-percentualImsEntrada').val();
    percentualIPICompra = $('#input-percentualIpiCompra').val();
    valorDespesasCompra = $('#input-despesaCompra').val();
    numeroDiasCondicoesPagamentoCompra = $('#input-pagtoCompraDias').val();
    numeroDiasCondicoesPagamentoVenda = $('#input-pagtoVendaDias').val();
    percentualIPIVenda = $('#input-ipiVendaFrete').val();
    valorComissaoBroker = $('#input-comissaoBroker').val();

    valorCusto = (ValorPrecoCompra * (percentualIcmsEntrada / 100)) + (valorPrecoCompra * (percentualIPICompra / 100)) + valorDespesasCompra;
    valorCustoTT = valorCusto * quantidadeProduto;

    if (valorPrecoCompra == 0) {
        valorCustoTTFrete = 0;
        valorCoefFrete = 0;
        valorFreteDda = 0;
        valorPrecoVendaCif = 0;
        valorFinanceiroProRata 0;
    } else {
        valorCustoTTFrete = (valorCusto * quantidadeProduto) + valorCustoTT
        valorFreteDda = 10;
        valorPrecoVendaCif = (valorCusto * valorFreteDda) * valorCoefFrete;


        switch (parseInt(paserpercentualIcmsSaida)) {

            case 18:
                valorCoefFrete = 1.43;
                break
            case 12:
                valorCoefFrete = 1.32;
                break
            case 7:
                valorCoefFrete = 1.24;
                break
            case 0:
                valorCoefFrete = 1.14;
                break
        }
    }

    detalhePedido.push({
        "QuantidadeProduto": quantidadeProduto,
        "Unidade": unidade,
        "DescricaoProduto": descricaoProduto,
        "Marca": marca,
        "ValorUnitarioMinimo": valorUnitarioMinimo,
        "ValorUnitario": valorUnitario,
        "ValorTotal": valorTotal,
        "PercentualIcms": percentualIcms,
        "NumeroDiasPrazoEntrega": numeroDiasPrazoEntrega,
        "ValorPrecoCompra": valorPrecoCompra,
        "PercentualIcmsEntrada": percentualIcmsEntrada,
        "PercentualIPICompra": percentualIPI,
        "ValorDespesasCompra": valorDespesasCompra,
        "NumeroDiasCondicoesPagamentoCompra": numeroDiasCondicoesPagamentoCompra,
        "NumeroDiasCondicoesPagamentoVenda": numeroDiasCondicoesPagamentoVenda,
        "PercentualIcmsSaida": percentualIcmsSaida,
        "PercentualIPIVenda": percentualIPIVenda,
        "ValorComissaoBroker": valorComissaoBroker,
        "ValorPrecoVendaUnitario": valorPrecoVendaUnitario,


    });

    var table = $(tableName).DataTable();
    table.row.add([

        quantidadeProduto,
        unidade,
        descricaoProduto,
        marca,
        valorUnitarioMinimo,
        valorUnitario,
        valorTotal,
        percentualIcms,
        numeroDiasPrazoEntrega,
        valorPrecoCompra,
        percentualIcmsEntrada,
        percentualIPICompra,
        valorDespesasCompra,
        numeroDiasCondicoesPagamentoCompra,
        numeroDiasCondicoesPagamentoVenda,
        percentualIcmsSaida,
        percentualIPIVenda,
        valorComissaoBroker,
        valorPrecoVendaUnitario.toString()


    ]).draw('true');

    //Limpar campos
    $('#input-unidade').val('');
    $('#input-produto').val('');
    $('#input-marca').val('');
    $('.format-money').val(0);
    $('.format-integer').val(0);
    $('#input-produto').focus();
}

function validarPedido() {

}


function carregarItem() {
    $('#input-quantidade').val(1000);
    $('#input-unidade').val('PCA');
    $('#input-produto').val('Controle para smart TV');
    $('#input-marca').val('Samsung');
    $('#input-valorUnitarioMinimo').val(3000);
    $('#input-icmsSaida').val(12);
    $('#input-prazoEntregaDias').val(30);
    $('#input-precoCompra').val(2200);
    $('#input-percentualImsEntrada').val(18);
    $('#input-percentualIpiCompra').val(12);
    $('#input-despesaCompra').val(200);
    $('#input-pagtoCompraDias').val(30);
    $('#input-pagtoVendaDias').val(60);
    $('#input-percentualImsSaida').val(12);
    $('#input-ipiVendaFrete').val(12);
    $('#input-comissaoBroker').val(50);
}