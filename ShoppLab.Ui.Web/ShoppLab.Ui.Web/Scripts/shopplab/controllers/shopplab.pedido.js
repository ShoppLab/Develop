
var id = 0;
var descricaoProduto = "Bucha de 12 polegadas";
var marca = "Zara plast";
var unidade = "Pça";
var quantidadeProduto = 10.00;
var valorUnitario = 0.80;
var valorUnitarioMinimo = 12;
var valorTotal = 8.00;
var valorComissaoBroker = 14;
var valorPrecoVendaUnitario = 15;
var valorPrecoCompra = 16;
var valorDespesasCompra = 17;
var percentualIcms = 18;
var percentualIcmsEntrada = 19;
var percentualIcmsSaida = 20;
var percentualIPI = 12;
var percentualIPICompra = 21;
var percentualIPIVenda = 22;
var numeroDiasPrazoEntrega = 23;
var numeroDiasCondicoesPagamentoCompra = 24;
var numeroDiasCondicoesPagamentoVenda = 25;

function salvar() {

    lstDetalhePedido = [];

    //var form = $("form-pedido").serializeObject();
    //$.ajax({ url: "/Pedido/Cadastrar", data: { idProjeto: idProjeto, idStatus: idStatusTipoProjeto } }).success(function (data) {

    //});


    if ($("#form-pedido").valid()) {

        //Verifica os itens da grid
  


        if (lstDetalhePedido == null) lstDetalhePedido = [];


        listaServicoProjeto.push(
            {
                //Id = id,
                //DescricaoProduto = descricaoProduto,
            });


    }



}

function validarCampos() {

}

function adicionarItem() {


    var dataTale = $("#table-detalhe-pedido").removeAttr('width').DataTable({
        scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        columnDefs: [
            { width: 200, targets: 0 }
        ],
        fixedColumns: true
    });
    
    //$('#bt-adiciona').on('click', function () {
        dataTale.row.add([
            descricaoProduto,
            quantidadeProduto,
            unidade,
            marca,
            valorUnitario,
            valorTotal,
            percentualIPI,
            percentualIPICompra,
            percentualIcms,
            percentualIcmsSaida,
            percentualIcmsEntrada,
            valorPrecoCompra,
            valorDespesasCompra,
            valorComissaoBroker,
            numeroDiasCondicoesPagamentoCompra,
            numeroDiasCondicoesPagamentoVenda,
            numeroDiasPrazoEntrega,
            valorPrecoVendaUnitario


        ]).draw('true');
    //});

    //$('#bt-adiciona').click();
}