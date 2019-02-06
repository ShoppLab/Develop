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
                using (var transaction = db.BeginTransaction())
                {
                    try
                    {
                        var query = "Insert Into Cliente (NmCliente, DtRegistro, DsEmail) " +
                            "Values (@NmCliente, @DtRegistro, @NrContrato, @DsEmail);" +
                            "Select Cast(Scope_Identity) as int";

                        var codigoCliente = db.Query<int>(query, new
                        {
                            obj.Cliente.Nome,
                            obj.Cliente.DataRegistro,
                            obj.Cliente.Email
                        }).Single();



                        query = "Insert Into Pedido (IdCliente, DtRegistro, DsCondicoesPagto, NrDiasValidadePreco, DsCondicoesEntrega, DsContato) " +
                            "Values (@IdCliente, @DtRegistro, @DsCondicoesPagto, @NrDiasValidadePreco, @DsCondicoesEntrega, @DsContato);" +
                            "Select Cast(Scope_Identity) as int";

                        var codigoPedido = db.Query<int>(query, new
                        {
                            codigoCliente,
                            obj.DataRegistro,
                            obj.CondicoesPagto,
                            obj.DiasValidadePreco,
                            obj.CondicoesEntrega,
                            obj.Contato
                        }).Single();


                        query = "Insert Into Pedido (IdPedido, QtProduto, VlUnitario, VlTotal, NrDiasPrazoEntrega, VlPrecoCompra, TxIcms, " +
                            "TxIcmsEntrada, TxIPICompra, VlDespesasCompra, NrDiasCondicoesPgtoCompra, NrDiasCondicoesPagtoVenda, TxIcmsSaida" +
                            "TxIcmsSaida, VlComissaoBroker, VlComissaoBroker, VlComissaoBroker, DsMarca, DsUnidade) " +
                            "Values (@IdPedido, @QtProduto, @VlUnitario, @VlTotal, @NrDiasPrazoEntrega, @VlPrecoCompra, @TxIcms, " +
                            "@TxIcmsEntrada, @TxIPICompra, @VlDespesasCompra, @NrDiasCondicoesPgtoCompra, @NrDiasCondicoesPagtoVenda, @TxIcmsSaida" +
                            "TxIcmsSaida, @VlComissaoBroker, @VlComissaoBroker, @VlComissaoBroker, @DsMarca, @DsUnidade)";


                        transaction.Commit();
                    }
                    catch
                    {
                        transaction.Rollback();
                    }
                }
            }
        }
    }
}
