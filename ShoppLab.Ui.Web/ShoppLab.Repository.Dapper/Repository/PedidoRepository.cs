using Dapper;
using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ShoppLab.Repository.Dapper.Repository
{
    public class PedidoRepository : RepositoryBase, IPedidoRepository
    {
        public List<Pedido> ObterDadosPedidos(DateTime? dataInicial, DateTime? dataFinal, string nomeCliente)
        {
            throw new NotImplementedException();
        }

        public void Salvar(Pedido obj)
        {
            using (var db = Connection())
            {
                db.Open();
                //using (var transaction = db.BeginTransaction())
                //{
                try
                {
                    //Dados do cliente
                    var query = "Insert Into Cliente (NmCliente, DtRegistro, NrContato, DsEmail) " +
                        "Values (@NmCliente, @DtRegistro, @NrContato, @DsEmail);" +
                        "Select Scope_Identity()";

                    var codigoCliente = db.Query<int>(query, new
                    {
                        NmCliente = obj.Cliente.Nome,
                        DtRegistro = obj.Cliente.DataRegistro,
                        NrContato =  obj.Cliente.Telefone,
                        DsEmail = obj.Cliente.Email
                    }).Single();

                    //Dados do Pedido
                    query = "Insert Into Pedido (IdCliente, DtRegistro, DsCondicoesPagto, NrDiasValidadePreco, DsCondicoesEntrega, DsContato) " +
                        "Values (@IdCliente, @DtRegistro, @DsCondicoesPagto, @NrDiasValidadePreco, @DsCondicoesEntrega, @DsContato);" +
                        "Select Scope_Identity()";

                    var codigoPedido = db.Query<int>(query, new
                    {
                        codigoCliente,
                        obj.DataRegistro,
                        obj.CondicoesPagto,
                        obj.DiasValidadePreco,
                        obj.CondicoesEntrega,
                        obj.Contato
                    }).Single();

                    //Dados DetalhePedido
                    query = "Insert Into DetalhePedido (IdPedido, QtProduto, VlUnitario, VlUnitarioMinimo, " +
                        "VlTotal, NrDiasPrazoEntrega, VlPrecoCompra, TxIcms, " +
                        "TxIcmsEntrada, TxIPICompra, VlDespesasCompra, NrDiasCondicoesPgtoCompra, NrDiasCondicoesPagtoVenda" +
                        "TxIcmsSaida, TxIPIVenda, VlComissaoBroker, VlPrecoVendaUnitario, DsProduto, DsMarca, DsUnidade) " +
                        "Values (@IdPedido, @QtProduto, @VlUnitario, @VlTotal, @NrDiasPrazoEntrega, @VlPrecoCompra, @TxIcms, " +
                        "@TxIcmsEntrada, @TxIPICompra, @VlDespesasCompra, @NrDiasCondicoesPgtoCompra, @NrDiasCondicoesPagtoVenda, @TxIcmsSaida" +
                        "TxIcmsSaida, @VlComissaoBroker, @VlPrecoVendaUnitario, @DsProduto, @DsMarca, @DsUnidade)";

                    foreach (var item in obj.DetalhePedido)
                    {
                        db.Query(query, new
                        {
                            codigoPedido,
                            item.QuantidadeProduto,
                            item.ValorUnitario,
                            item.ValorUnitarioMinimo,
                            item.ValorTotal,
                            item.NumeroDiasPrazoEntrega,
                            item.ValorPrecoCompra,
                            item.PercentualIcms,
                            item.PercentualIcmsEntrada,
                            item.PercentualIPICompra,
                            item.ValorDespesasCompra,
                            item.NumeroDiasCondicoesPagamentoCompra,
                            item.NumeroDiasCondicoesPagamentoVenda,
                            item.PercentualIcmsSaida,
                            item.PercentualIPIVenda,
                            item.ValorComissaoBroker,
                            item.DescricaoProduto,
                            item.Marca,
                            item.Unidade
                        });
                    }

                    //    transaction.Commit();
                }
                catch (Exception ex)
                {
                    //transaction.Rollback();
                }
            }
        }
    }
}

