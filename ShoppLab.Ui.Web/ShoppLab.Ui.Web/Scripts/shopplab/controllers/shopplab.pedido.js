
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
    detalhePedido = [],
    detalhePedidoApresentacao = [],

    rowDataTable = null,
    idItemPedido = 0,
    indexRow = 0;

function adicionarItem() {

    if (!validarItemPedido()) {
        AbrirModal("Atenção", "Por favor, Preencha o(s) campo(s) do item pedido!");

    } else {

        if (detalhePedido.length == 0) {
            detalhePedido = [];
        }

        carregarValoresItem();
        limparVariaveis();
        valorCusto = (valorPrecoCompra - valorPrecoCompra * (percentualIcmsEntrada / 100)) + (valorPrecoCompra * (percentualIPICompra / 100)) + valorDespesasCompra;
        valorCustoTT = valorCusto * quantidadeProduto;

        if (valorPrecoCompra == 0) {
            valorCustoTTFrete = 0;
            valorCoefFrete = 0;
            valorFreteDda = 0;
            valorAdicFinanceiroProRata = 0;
            valorPrecoVendaCif = 0;

        } else {
            valorCustoTTFrete = (valorFreteDda * quantidadeProduto) + valorCustoTT
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

            valorPrecoVendaCif = (valorCusto * valorFreteDda) * valorCoefFrete;
            var proRata = (-(numeroDiasCondicoesPagamentoCompra - 7 - numeroDiasCondicoesPagamentoVenda)) * valorAdFinan;

            if (proRata < 0) {
                valorAdicFinanceiroProRata = 0;
            } else {
                valorAdicFinanceiroProRata = proRata;
            }
        }
        valorsoma = percentualIcmsSaida + percentualIPIVenda + valorPis + valorCofins
            + valorContaSocial + valorIrpj + valorComissaoVendedor + valorAdicFinanceiroProRata + valorComissaoBroker + valorLucroBruto
            + valorCustoFixo;

        valorMkp = -(valorsoma - 100) / 100;

        valorPrecoVendaUnitario = (valorCusto / valorMkp) + valorPrecoVendaCif;
        valorUnitario = valorPrecoVendaUnitario;
        valorTotal = valorPrecoVendaUnitario * quantidadeProduto;
        valorPrecoVendaUnitario = valorPrecoVendaUnitario;

        id = id--;

        detalhePedido.push({
            "Id": id,
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
            "PercentualIPICompra": percentualIPICompra,
            "PercentualIPIVenda": percentualIPIVenda,
            "NumeroDiasPrazoEntrega": numeroDiasPrazoEntrega,
            "NumeroDiasCondicoesPagamentoCompra": numeroDiasCondicoesPagamentoCompra,
            "NumeroDiasCondicoesPagamentoVenda": numeroDiasCondicoesPagamentoVenda,
        });

        detalhePedidoApresentacao.push({
            "Id": id,
            "QuantidadeProduto": formatarMoeda(quantidadeProduto),
            "Unidade": unidade,
            "DescricaoProduto": descricaoProduto,
            "Marca": marca,
            "ValorUnitario": formatarMoeda(valorUnitario),
            "ValorUnitarioMinimo": formatarMoeda(valorUnitarioMinimo),
            "ValorTotal": formatarMoeda(valorTotal),
            "ValorPrecoVendaUnitario": formatarMoeda(valorPrecoVendaUnitario),
            "ValorPrecoCompra": formatarMoeda(valorPrecoCompra),
            "ValorDespesasCompra": formatarMoeda(valorDespesasCompra),
            "ValorComissaoBroker": formatarMoeda(valorComissaoBroker),

            "PercentualIcms": percentualIcms,
            "PercentualIcmsEntrada": percentualIcmsEntrada,
            "PercentualIcmsSaida": percentualIcmsSaida,
            "PercentualIPICompra": percentualIPICompra,
            "PercentualIPIVenda": percentualIPIVenda,
            "NumeroDiasPrazoEntrega": numeroDiasPrazoEntrega,
            "NumeroDiasCondicoesPagamentoCompra": numeroDiasCondicoesPagamentoCompra,
            "NumeroDiasCondicoesPagamentoVenda": numeroDiasCondicoesPagamentoVenda,
        });


        var table = $(tableName).DataTable();
        table.clear();
        table.rows.add(detalhePedidoApresentacao);
        table.draw();

        limparCampos();
    }
}

function carregarItens() {


    for (i = 0; i < itensPedido.length; i++) {


        detalhePedido.push({
            "Id": itensPedido[i].Id,
            "QuantidadeProduto": itensPedido[i].QuantidadeProduto,
            "Unidade": itensPedido[i].Unidade,
            "DescricaoProduto": itensPedido[i].DescricaoProduto,
            "Marca": itensPedido[i].Marca,
            "ValorUnitario": itensPedido[i].ValorUnitario,
            "ValorUnitarioMinimo": itensPedido[i].ValorUnitarioMinimo,
            "ValorTotal": itensPedido[i].ValorTotal,
            "ValorPrecoVendaUnitario": itensPedido[i].ValorPrecoVendaUnitario,
            "ValorPrecoCompra": itensPedido[i].ValorPrecoCompra,
            "ValorDespesasCompra": itensPedido[i].ValorDespesasCompra,
            "ValorComissaoBroker": itensPedido[i].ValorComissaoBroker,

            "PercentualIcms": itensPedido[i].PercentualIcms,
            "PercentualIcmsEntrada": itensPedido[i].PercentualIcmsEntrada,
            "PercentualIcmsSaida": itensPedido[i].PercentualIcmsSaida,
            "PercentualIPICompra": itensPedido[i].PercentualIPICompra,
            "PercentualIPIVenda": itensPedido[i].PercentualIPIVenda,
            "NumeroDiasPrazoEntrega": itensPedido[i].NumeroDiasPrazoEntrega,
            "NumeroDiasCondicoesPagamentoCompra": itensPedido[i].NumeroDiasCondicoesPagamentoCompra,
            "NumeroDiasCondicoesPagamentoVenda": itensPedido[i].NumeroDiasCondicoesPagamentoVenda,
        });

        detalhePedidoApresentacao.push({
            "Id": itensPedido[i].Id,
            "QuantidadeProduto": formatarMoeda(itensPedido[i].QuantidadeProduto),
            "Unidade": itensPedido[i].Unidade,
            "DescricaoProduto": itensPedido[i].DescricaoProduto,
            "Marca": itensPedido[i].Marca,
            "ValorUnitario": formatarMoeda(itensPedido[i].ValorUnitario),
            "ValorUnitarioMinimo": formatarMoeda(itensPedido[i].ValorUnitarioMinimo),
            "ValorTotal": formatarMoeda(itensPedido[i].ValorTotal),
            "ValorPrecoVendaUnitario": formatarMoeda(itensPedido[i].ValorPrecoVendaUnitario),
            "ValorPrecoCompra": formatarMoeda(itensPedido[i].ValorPrecoCompra),
            "ValorDespesasCompra": formatarMoeda(itensPedido[i].ValorDespesasCompra),
            "ValorComissaoBroker": formatarMoeda(itensPedido[i].ValorComissaoBroker),

            "PercentualIcms": itensPedido[i].PercentualIcms,
            "PercentualIcmsEntrada": itensPedido[i].PercentualIcmsEntrada,
            "PercentualIcmsSaida": itensPedido[i].PercentualIcmsSaida,
            "PercentualIPICompra": itensPedido[i].PercentualIPICompra,
            "PercentualIPIVenda": itensPedido[i].PercentualIPIVenda,
            "NumeroDiasPrazoEntrega": itensPedido[i].NumeroDiasPrazoEntrega,
            "NumeroDiasCondicoesPagamentoCompra": itensPedido[i].NumeroDiasCondicoesPagamentoCompra,
            "NumeroDiasCondicoesPagamentoVenda": itensPedido[i].NumeroDiasCondicoesPagamentoVenda,
        });
    }
}

function carregarValoresItem() {

    valorPrecoCompra = formatarMoedaUS($('#input-precoCompra').val());
    percentualIcmsEntrada = formatarMoedaUS($('#input-percentualImsEntrada').val());
    percentualIPICompra = formatarMoedaUS($('#input-percentualIpiCompra').val());
    valorDespesasCompra = formatarMoedaUS($('#input-despesaCompra').val());
    quantidadeProduto = formatarMoedaUS($('#input-quantidade').val());
    unidade = $('#input-unidade').val();
    descricaoProduto = $('#input-produto').val();
    marca = $('#input-marca').val();
    valorUnitarioMinimo = formatarMoedaUS($('#input-valorUnitarioMinimo').val());
    percentualIcmsSaida = formatarMoedaUS($('#input-icmsSaida').val());
    numeroDiasPrazoEntrega = $('#input-prazoEntregaDias').val();
    numeroDiasCondicoesPagamentoCompra = $('#input-pagtoCompraDias').val();
    numeroDiasCondicoesPagamentoVenda = $('#input-pagtoVendaDias').val();
    percentualIPIVenda = formatarMoedaUS($('#input-ipiVendaFrete').val());
    valorComissaoBroker = formatarMoedaUS($('#input-comissaoBroker').val());
    percentualIcms = percentualIcmsSaida;
    valorLucroBruto = valorComissaoBroker;
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

function limparCampos() {

    $('.format-money').val(0);
    $('.format-integer').val(0);
    $('#input-unidade').val('');
    $('#input-produto').val('');
    $('#input-marca').val('');
    $('#input-produto').focus();
}

function limparCamposConsulta() {
    $('input[type="text"]').val('');

    var table = $('table').DataTable();
    table.clear().draw();
    $('#DataInicial').focus();
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

function obterDadosPedidos() {

    var dataInicial = $('#DataInicial').val();
    var dataFinal = $('#DataFinal').val();
    var nomeCliente = $('#NomeCliente').val();

    if (dataInicial == "" && dataFinal == "" && nomeCliente == "") {
        AbrirModal("Atenção", "Por favor, preencher algum dos filtros!");
    } else {
        $.ajax({
            type: "GET",
            url: "/Pedido/ObterDadosPedidos",

            data: { dataInicial: dataInicial, dataFinal: dataFinal, nomeCliente: nomeCliente },
            contentType: 'application/json; charset=utf-8',
            async: true,
            success: function (data) {
                var table = $('#table-pedido').DataTable();
                table.clear().draw(false);

                if (data.length == 0) {
                    AbrirModal("Informação", "Nenhuma registro foi encontrado para os filtros informados!");
                } else {
                    for (var i = 0; i < data.length; i++) {
                        table.row.add([data[i].Pedido, data[i].DataRegistro, data[i].Nome, formatarMoeda(formatarMoedaUS(data[i].PrecoVendaUnitario))])
                            .draw(false);
                    }
                }
            }
        });
    }
}

function salvar() {

    if ($(formName).valid()) {

        if (validarDadosPedido())
            return;

        var data = $(formName).serializeObject();
        var cliente = new Object();

        cliente.nome = $('#Nome').val();
        cliente.email = $('#Email').val();
        cliente.DataRegistro = $('#DataRegistro').val();
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
                if (data == true) {
                    $('#alert-success').css('display', 'block');
                    window.scrollTo(0, 0);
                    setTimeout(function () {
                        $('#alert-success').css('display', 'none');
                        window.location.href = urlConsultar;
                    }, 5000);
                    
                } else {
                    AbrirModal("Atenção", "Ocorreu um problema e não foi possível gravar as informações!");
                }
            }
        });
    } else {

        if ($('div input.input-validation-error').length != 0) {
            $('#alert-danger').css('display', 'block');
            window.scrollTo(0, 0);

            setTimeout(function () {
                $('#alert-danger').css('display', 'none');

            }, 5000);
        };
    }
}

function validarDadosPedido() {

    //Verificar se existem item no pedido
    var table = $(tableName).DataTable();
    if (!table.data().count()) {
        AbrirModal('Atenção', 'Por favor, adicionar um item ao pedido!');
    }
}

function validarItemPedido() {
    carregarItem();
    limparVariaveis();
    if (descricaoProduto == "" || quantidadeProduto == 0 || unidade == "" || marca == "" || valorUnitario == 0 || valorPrecoCompra == 0 || valorComissaoBroker == 0) {
        return false
    } else {
        return true;
    }
}

function carregarItem() {

    valorPrecoCompra = formatarMoedaUS($('#input-precoCompra').val());
    percentualIcmsEntrada = formatarMoedaUS($('#input-percentualImsEntrada').val());
    percentualIPICompra = formatarMoedaUS($('#input-percentualIpiCompra').val());
    valorDespesasCompra = formatarMoedaUS($('#input-despesaCompra').val());
    quantidadeProduto = formatarMoedaUS($('#input-quantidade').val());
    unidade = $('#input-unidade').val();
    descricaoProduto = $('#input-produto').val();
    marca = $('#input-marca').val();
    valorUnitarioMinimo = formatarMoedaUS($('#input-valorUnitarioMinimo').val());
    percentualIcmsSaida = formatarMoedaUS($('#input-icmsSaida').val());
    numeroDiasPrazoEntrega = $('#input-prazoEntregaDias').val();
    numeroDiasCondicoesPagamentoCompra = $('#input-pagtoCompraDias').val();
    numeroDiasCondicoesPagamentoVenda = $('#input-pagtoVendaDias').val();
    percentualIPIVenda = formatarMoedaUS($('#input-ipiVendaFrete').val());
    valorComissaoBroker = formatarMoedaUS($('#input-comissaoBroker').val());
    percentualIcms = percentualIcmsSaida;
    valorLucroBruto = valorComissaoBroker;
}

function modalYesNo() {
    AbrirModalYesNo("Atenção", "Deseja excluir o item?");
}

function sim() {

    var rows = $('#table-detalhe-pedido').DataTable().data().count();
    if (rows == 1) {
        AbrirModal("Atenção", "Não será possível excluir todos os itens do pedido!");
    } else {
        if (idItemPedido == 0 || idItemPedido < 0 ) {
            removerItensArrayProdutos();
        } else {
            $.ajax({
                type: "GET",
                url: "/Pedido/ExcluirItemPedido",

                data: { id: idItemPedido },
                contentType: 'application/json; charset=utf-8',
                async: true,
                success: function (data) {
                    if (data = true) {
                        removerItensArrayProdutos();
                    } else {
                        AbrirModalYesNo("Atenção", "O item não foi excluído, favor verificar!");
                    }
                }
            });
        }
    }
}

function removerItensArrayProdutos() {
    debugger;
    for (var i = 0; i < detalhePedido.length; i++) {
        if (detalhePedido[i].Id == idItemPedido) {
            detalhePedido.splice(i, 1);
        }
    }
    for (var i = 0; i < detalhePedidoApresentacao.length; i++) {
        if (detalhePedidoApresentacao[i].Id == idItemPedido) {
            detalhePedidoApresentacao.splice(i, 1);
        }
    }
    rowDataTable.remove().draw();
    idItemPedido = 0;
}

function addDell() {
    $('#input-quantidade').val(200);
    $('#input-unidade').val('PCA');
    $('#input-produto').val('Notebook Dell Inspiron');
    $('#input-marca').val('Samsung');
    $('#input-valorUnitarioMinimo').val(180000);
    $('#input-icmsSaida').val(18);
    $('#input-prazoEntregaDias').val(10);
    $('#input-precoCompra').val(150000);
    $('#input-percentualImsEntrada').val(18);
    $('#input-percentualIpiCompra').val(0);
    $('#input-despesaCompra').val(0);
    $('#input-pagtoCompraDias').val(28);
    $('#input-pagtoVendaDias').val(28);
    $('#input-percentualImsSaida').val(18);
    $('#input-ipiVendaFrete').val(0);
    $('#input-comissaoBroker').val(50);
}

function addMicrosoft() {
    $('#input-quantidade').val(600);
    $('#input-unidade').val('PCA');
    $('#input-produto').val('Teclado Microsot Arc');
    $('#input-marca').val('Samsung');
    $('#input-valorUnitarioMinimo').val(450000);
    $('#input-icmsSaida').val(18);
    $('#input-prazoEntregaDias').val(10);
    $('#input-precoCompra').val(350000);
    $('#input-percentualImsEntrada').val(18);
    $('#input-percentualIpiCompra').val(0);
    $('#input-despesaCompra').val(0);
    $('#input-pagtoCompraDias').val(28);
    $('#input-pagtoVendaDias').val(28);
    $('#input-percentualImsSaida').val(18);
    $('#input-ipiVendaFrete').val(0);
    $('#input-comissaoBroker').val(50);
}
