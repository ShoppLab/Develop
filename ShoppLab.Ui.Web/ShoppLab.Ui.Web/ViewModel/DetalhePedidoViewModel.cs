
namespace ShoppLab.Ui.Web.ViewModel
{
    public class DetalhePedidoViewModel
    {
        public int Id { get; set; }

        public int IdPedido { get; set; }

        public string DescricaoProduto { get; set; }

        public string Marca { get; set; }

        public string Unidade { get; set; }

        public decimal QuantidadeProduto { get; set; }

        public decimal ValorUnitario { get; set; }

        public decimal ValorUnitarioMinimo { get; set; }

        public decimal ValorTotal { get; set; }

        public decimal ValorComissaoBroker { get; set; }

        public decimal ValorPrecoVendaUnitario { get; set; }

        public decimal ValorPrecoCompra { get; set; }

        public decimal ValorDespesasCompra { get; set; }

        public decimal PercentualIcms { get; set; }

        public decimal PercentualIcmsEntrada { get; set; }

        public decimal PercentualIcmsSaida { get; set; }

        public decimal PercentualIPICompra { get; set; }

        public decimal PercentualIPIVenda { get; set; }

        public int NumeroDiasPrazoEntrega { get; set; }

        public int NumeroDiasCondicoesPagamentoCompra { get; set; }

        public int NumeroDiasCondicoesPagamentoVenda { get; set; }
    }
}