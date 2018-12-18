
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
    valorsoma = 0,

    valorPis = 0.65,
    valorCofins = 3,
    valorContaSocial = 1.08,
    valorIrpj = 1.32,
    valorComissaoVendedor = 1,
    valorAdicFinanceiroProRata = 0,
    valorLucroBruto = 0,
    valorCustoFixo = 10,
    valorProtecaoLucro = 0,

    pedido,
    tableName = "#table-detalhe-pedido",
    urlPedido = "/Pedido/Cadastrar",
    formName = "#form-pedido",
    formItemPedidoName = "#form-itens-pedido",
    detalhePedido = []


function salvar() {

    if (validarDadosPedido())
        return;

    //if ($(formName).valid()) {

    var data = $(formName).serializeObject();

    var cliente = new Object();
    cliente.nome = $('#Nome').val();
    cliente.email = $('#Email').val();
    cliente.telefone = $('#Telefone').val();

    data.cliente = cliente;

    $.ajax({
        cache: false,
        url: urlPedido,
        type: 'POST',
        data: JSON.stringify({ model: data, detalhePedidoViewModel: detalhePedido }),
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

    if ($(formItemPedidoName).valid() == false) {
        alert("Por favor, preencha o campo dos item do pedido");

    } else {

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
        percentualIcms = parseFloat(percentualIcmsSaida);
        valorLucroBruto = valorComissaoBroker;

        limparVariaveis();
        valorCusto = (parseFloat(valorPrecoCompra) - (parseFloat(valorPrecoCompra) * (parseFloat(percentualIcmsEntrada) / 100)) + (parseFloat(valorPrecoCompra) * (parseInt(percentualIPICompra) / 100)) + parseFloat(valorDespesasCompra));
        valorCustoTT = parseFloat(valorCusto) * parseFloat(quantidadeProduto);

        if (valorPrecoCompra == 0) {
            valorCustoTTFrete = 0;
            valorCoefFrete = 0;
            valorFreteDda = 0;
            valorAdicFinanceiroProRata = 0;
            valorPrecoVendaCif = 0;

        } else {
            valorCustoTTFrete = (parseFloat(valorFreteDda) * parseFloat(quantidadeProduto)) + parseFloat(valorCustoTT)
            valorFreteDda = 0;

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

            valorPrecoVendaCif = (parseFloat(valorCusto) * parseFloat(valorFreteDda)) * parseFloat(valorCoefFrete);
            var proRata = (-(parseFloat(numeroDiasCondicoesPagamentoCompra) - 7 - parseFloat(numeroDiasCondicoesPagamentoVenda))) * parseFloat(valorAdFinan);

            if (proRata < 0) {
                valorAdicFinanceiroProRata = 0;
            } else {
                valorAdicFinanceiroProRata = proRata;
            }
        }
        valorsoma = parseInt(percentualIcmsSaida) + parseInt(percentualIPIVenda) + parseFloat(valorPis) + parseFloat(valorCofins)
            + parseFloat(valorContaSocial) + parseFloat(valorIrpj) + parseFloat(valorComissaoVendedor)
            + parseFloat(valorAdicFinanceiroProRata) + formatarMoedaUS(valorComissaoBroker) + formatarMoedaUS(valorLucroBruto)
            + parseFloat(valorCustoFixo);

        valorMkp = -(parseFloat(valorsoma) - 100) / 100;


        valorPrecoVendaUnitario = (parseFloat(valorCusto) / parseFloat(valorMkp)) + parseFloat(valorPrecoVendaCif);
        valorUnitario = valorPrecoVendaUnitario;
        valorTotal = parseFloat(valorPrecoVendaUnitario) * parseFloat(quantidadeProduto);
        valorPrecoVendaUnitario = valorPrecoVendaUnitario;

        detalhePedido.push({
            "id": "1",
            "QuantidadeProduto": quantidadeProduto,
            "Unidade": unidade,
            "DescricaoProduto": descricaoProduto,
            "Marca": marca,
            "ValorUnitario": valorUnitario,
            "ValorUnitarioMinimo": valorUnitarioMinimo,
            "ValorTotal": valorTotal,
            "ValorPrecoVendaUnitario": valorPrecoVendaUnitario,
            "ValorPrecoCompra": valorPrecoCompra,
            "ValorDespesasCompra": valorDespesasCompra,
            "ValorComissaoBroker": valorComissaoBroker,

            "PercentualIcms": percentualIcms,
            "PercentualIcmsEntrada": percentualIcmsEntrada,
            "PercentualIcmsSaida": percentualIcmsSaida,
            "PercentualIPICompra": percentualIPI,
            "PercentualIPIVenda": percentualIPIVenda,
            "NumeroDiasPrazoEntrega": numeroDiasPrazoEntrega,
            "NumeroDiasCondicoesPagamentoCompra": numeroDiasCondicoesPagamentoCompra,
            "NumeroDiasCondicoesPagamentoVenda": numeroDiasCondicoesPagamentoVenda,
        });

        var table = $(tableName).DataTable();
        table.clear();
        table.rows.add(detalhePedido);
        table.draw();

        //Limpar campos
        //$('#input-unidade').val('');
        //$('#input-produto').val('');
        //$('#input-marca').val('');
        //$('.format-money').val(0);
        //$('.format-integer').val(0);
        //$('#input-produto').focus();

    }
}


function limparVariaveis() {

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
    $('#input-pagtoCompraDias').val(28);
    $('#input-pagtoVendaDias').val(28);
    $('#input-percentualImsSaida').val(18);
    $('#input-ipiVendaFrete').val(0);
    $('#input-comissaoBroker').val(50);
}

function ObterDadosPedidos() {

    var dataInicial = $('#DataInicial').val();
    var dataFinal = $('#DataFinal').val();
    var nomeCliente = $('#NomeCliente').val();

    if (dataInicial == "" && dataFinal == "" && nomeCliente == "") {
        alert("Por favor, preencher algum dos filtros!");
    }

    $.ajax({
        type: "GET",
        url: "/Pedido/ObterDadosPedidos",

        data: { dataInicial: dataInicial, dataFinal: dataFinal, nomeCliente: nomeCliente },
        contentType: 'application/json; charset=utf-8',
        async: true,
        success: function (data) {
            var table = $('#table-pedido').DataTable();
            table.clear().draw(false);

            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {
                    table.row.add([data[i].Pedido, data[i].DataRegistro, data[i].Nome, data[i].PrecoVendaUnitario])
                        .draw(false);
                }
            }
        }
    });
}

function format(d) {
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Preço Compra</td>' +
        '<td>' + d.ValorPrecoCompra + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Preço Venda Unitário</td>' +
        '<td>' + d.ValorPrecoVendaUnitario + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Despesas Compra</td>' +
        '<td>' + d.ValorDespesasCompra + '</td>' +
        '</tr>' +
        '<td>Comissão Broker</td>' +
        '<td>' + d.ValorComissaoBroker + '</td>' +
        '</tr>' +
        '<td>% Percentual Icms</td>' +
        '<td>' + d.PercentualIcms + '</td>' +
        '</tr>' +
        '<td>% Icms Entrada</td>' +
        '<td>' + d.PercentualIcmsEntrada + '</td>' +
        '</tr>' +
        '<td>% Icms Saída</td>' +
        '<td>' + d.PercentualIcmsSaida + '</td>' +
        '</tr>' +
        '<td>% Ipi Compra</td>' +
        '<td>' + d.PercentualIPICompra + '</td>' +
        '</tr>' +
        '<td>% Ipi Venda</td>' +
        '<td>' + d.PercentualIPIVenda + '</td>' +
        '</tr>' +
        '<td>Dias Prazo Entrega</td>' +
        '<td>' + d.NumeroDiasPrazoEntrega + '</td>' +
        '</tr>' +
        '<td>Dias Condições Pagto Compra</td>' +
        '<td>' + d.NumeroDiasCondicoesPagamentoCompra + '</td>' +
        '</tr>' +
        '<td>Dias Condições Pagto Venda</td>' +
        '<td>' + d.NumeroDiasCondicoesPagamentoVenda + '</td>' +
        '</tr>' +
        '</table>';
}


