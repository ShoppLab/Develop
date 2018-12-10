
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
    valorMkp = 0,
    valorPrecoVendaCif = 0,
    valorFreteDda = 0,
    valorAdFinan = 4 / 30,
    valorSoma = 0,

    valorPis = 0.65,
    valorCofins = 3,
    valorContaSocial = 1.08,
    valorIrpj = 1.32,
    valorComissaoVendedor = 1,
    valorFinanceiroProRata = 0,

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

    percentualIcms = 0;
    percentualIcmsEntrada = 0;
    percentualIcmsSaida = 0;
    percentualIPI = 0;
    percentualIPICompra = 0;
    percentualIPIVenda = 0;

    valorPrecoCompra = $('#input-precoCompra').val();
    percentualIcmsEntrada = $('#input-percentualImsEntrada').val();
    percentualIPICompra = $('#input-percentualIpiCompra').val();
    valorDespesasCompra = $('#input-despesaCompra').val();
    quantidadeProduto = $('#input-quantidade').val();
    unidade = $('#input-unidade').val();
    descricaoProduto = $('#input-produto').val();
    marca = $('#input-marca').val();
    valorUnitarioMinimo = $('#input-valorUnitarioMinimo').val();
    percentualIcmsSaida = $('#input-icmsSaida').val();
    numeroDiasPrazoEntrega = $('#input-prazoEntregaDias').val();
    numeroDiasCondicoesPagamentoCompra = $('#input-pagtoCompraDias').val();
    numeroDiasCondicoesPagamentoVenda = $('#input-pagtoVendaDias').val();
    percentualIPIVenda = $('#input-ipiVendaFrete').val();
    valorComissaoBroker = $('#input-comissaoBroker').val();

    limparVariaveis();

    valorCusto = parseFloat(valorPrecoCompra) - (parseFloat(valorPrecoCompra) * (parseFloat(percentualIcmsEntrada) / 100)) + (parseFloat(valorPrecoCompra) * (parseInt(percentualIPICompra) / 100)) + parseFloat(valorDespesasCompra);
    valorCustoTT = parseFloat(valorCusto) * parseFloat(quantidadeProduto);
    valorMkp = (-parseFloat(valorSoma) - 100) / 100;

    if (valorPrecoCompra == 0) {
        valorCustoTTFrete = 0;
        valorCoefFrete = 0;
        valorFreteDda = 0;
        valorPrecoVendaCif = 0;
        valorFinanceiroProRata = 0;
        valorPrecoVendaCif = 0;

    } else {
        valorCustoTTFrete = (parseFloat(valorCusto) * parseFloat(quantidadeProduto)) + parseFloat(valorCustoTT)
        valorFreteDda = 10;
        valorPrecoVendaCif = (parseFloat(valorCusto) * parseFloat(valorFreteDda)) * parseFloat(valorCustoTT);

        switch (parseInt(percentualIcmsSaida)) {

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

        var proRata = (-parseFloat(numeroDiasCondicoesPagamentoCompra) - 7 - parseFloat(numeroDiasCondicoesPagamentoVenda)) * parseFloat(valorAdFinan);

        if (proRata < 0) {
            valorFinanceiroProRata = 0;
        } else {
            valorFinanceiroProRata = proRata;
        }

    }

    valorPrecoVendaUnitario = (parseFloat(valorCusto) / parseFloat(valorMkp)) + parseFloat(valorPrecoVendaCif);
    valorUnitario = valorPrecoVendaUnitario;
    valorTotal = parseFloat(valorUnitario) * parseFloat(quantidadeProduto);
    percentualIcms = parseFloat(percentualIcmsSaida);


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
        valorPrecoVendaUnitario
    ]).draw('true');

    //Limpar campos
    $('#input-unidade').val('');
    $('#input-produto').val('');
    $('#input-marca').val('');
    $('.format-money').val(0);
    $('.format-integer').val(0);
    $('#input-produto').focus();

    console.log(valorCusto);
    console.log(valorCustoTT);
    console.log(valorCustoTTFrete);
    console.log(valorCustoFixo);
    console.log(valorCoefFrete);
    console.log(valorMkp);
    console.log(valorPrecoVendaCif);
    console.log(valorFreteDda);
    console.log(valorAdFinan);
    console.log(valorSoma);

}

function validarPedido() {

}

function limparVariaveis () {

    if (valorPrecoCompra == "") {
        valorPrecoCompra = 0;
    }

    if (percentualIcmsEntrada == "") {
        percentualIcmsEntrada = 0;
    }

    if (percentualIPICompra == "") {
        percentualIPICompra = 0;
    }

    if (valorDespesasCompra == "") {
        valorDespesasCompra = 0;
    }

    if (quantidadeProduto == "") {
        quantidadeProduto = 0;
    }

    if (valorUnitarioMinimo == "") {
        valorUnitarioMinimo = 0;
    }

    if (percentualIcmsSaida == "") {
        percentualIcmsSaida = 0;
    }

    if (numeroDiasPrazoEntrega == "") {
        numeroDiasPrazoEntrega = 0;
    }

    if (numeroDiasCondicoesPagamentoCompra == "") {
        numeroDiasCondicoesPagamentoCompra = 0;
    }

    if (numeroDiasCondicoesPagamentoVenda == "") {
        numeroDiasCondicoesPagamentoVenda = 0;
    }

    if (percentualIPIVenda == "") {
        percentualIPIVenda = 0;
    }

    if (valorComissaoBroker == "") {
        valorComissaoBroker = 0;
    }
}

function carregarItem() {
    $('#input-quantidade').val(100);
    $('#input-unidade').val('PCA');
    $('#input-produto').val('Controle para smart TV');
    $('#input-marca').val('Samsung');
    $('#input-valorUnitarioMinimo').val(13012300);
    $('#input-icmsSaida').val(18);
    $('#input-prazoEntregaDias').val(10);
    $('#input-precoCompra').val(9999999);
    $('#input-percentualImsEntrada').val(18);
    $('#input-percentualIpiCompra').val(0);
    $('#input-despesaCompra').val(0);
    $('#input-pagtoCompraDias').val(18);
    $('#input-pagtoVendaDias').val(28);
    $('#input-percentualImsSaida').val(18);
    $('#input-ipiVendaFrete').val(0);
    $('#input-comissaoBroker').val(50);
}