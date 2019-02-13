﻿using Dapper;
using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Transactions;

namespace ShoppLab.Repository.Dapper.Repository
{
    public class PedidoRepository : RepositoryBase, IPedidoRepository
    {
        public List<Pedido> ObterDadosPedidos(DateTime? dataInicial, DateTime? dataFinal, string nomeCliente)
        {
            StringBuilder query = new StringBuilder();

            query.AppendLine("Select");
            query.AppendLine("a.IdPedido IdPedido, a.IdPedido Id, a.DtRegistro DataRegistro, b.IdDetalhePedido IdDetalhePedido, b.VlPrecoVendaUnitario ValorPrecoVendaUnitario, b.QtProduto QuantidadeProduto, c.IdCliente, c.NmCliente Nome");
            query.AppendLine("From Pedido a");
            query.AppendLine("Inner Join DetalhePedido b on a.IdPedido = b.IdPedido");
            query.AppendLine("Inner Join Cliente c on a.IdCliente = c.IdCliente");
            query.AppendLine("Where a.IdPedido > 0");

            if (dataInicial != null)
            {
                query.AppendLine("And a.DtRegistro >= '" +  dataInicial?.ToString("yyyy-MM-dd hh:mm:ss") + "'");
            }

            if (dataFinal != null)
            {
                query.AppendLine("And a.DtRegistro <= '" + dataFinal?.ToString("yyyy-MM-dd hh:mm:ss") + "'");
            }

            if (!String.IsNullOrEmpty(nomeCliente))
            {
                query.Append("And c.NmCliente >= Like '%" + nomeCliente + "%'");
            }



            var list = new List<Pedido>();

            using (var db = Connection())
            {
                list = db.Query<Pedido, DetalhePedido, Cliente, Pedido>(query.ToString(), (pedido, detalhePedido, cliente) =>
               {
                   pedido.Cliente = cliente;
                   pedido.DetalhePedido.Add(detalhePedido);
                   return pedido;
               }, splitOn: "IdPedido, IdDetalhePedido, IdCliente", commandType: CommandType.Text).ToList();

            }

            return list;

        }

        public void Salvar(Pedido obj)
        {

            using (TransactionScope scope = new TransactionScope())
            {
                using (var db = Connection())
                {
                    db.Open();
                    //Dados do cliente
                    var query = "Insert Into Cliente (NmCliente, DtRegistro, NrContato, DsEmail) " +
                        "Values (@NmCliente, @DtRegistro, @NrContato, @DsEmail);" +
                        "Select Scope_Identity()";

                    var codigoCliente = db.Query<int>(query, new
                    {
                        NmCliente = obj.Cliente.Nome,
                        DtRegistro = obj.Cliente.DataRegistro,
                        NrContato = obj.Cliente.Telefone,
                        DsEmail = obj.Cliente.Email
                    }).Single();

                    //Dados do Pedido
                    query = "Insert Into Pedido (IdCliente, DtRegistro, DsCondicoesPagto, NrDiasValidadePreco, DsCondicoesEntrega, DsContato) " +
                        "Values (@IdCliente, @DtRegistro, @DsCondicoesPagto, @NrDiasValidadePreco, @DsCondicoesEntrega, @DsContato);" +
                        "Select Scope_Identity()";

                    var codigoPedido = db.Query<int>(query, new
                    {
                        IdCliente = codigoCliente,
                        DtRegistro = obj.DataRegistro,
                        DsCondicoesPagto = obj.CondicoesPagto,
                        NrDiasValidadePreco = obj.DiasValidadePreco,
                        DsCondicoesEntrega = obj.CondicoesEntrega,
                        DsContato = obj.Contato
                    }).Single();

                    //Dados DetalhePedido
                    query = "Insert Into DetalhePedido (IdPedido, QtProduto, VlUnitario, VlUnitarioMinimo, " +
                        "VlTotal, NrDiasPrazoEntrega, VlPrecoCompra, TxIcms, " +
                        "TxIcmsEntrada, TxIPICompra, VlDespesasCompra, NrDiasCondicoesPgtoCompra, NrDiasCondicoesPagtoVenda, " +
                        "TxIcmsSaida, TxIPIVenda, VlComissaoBroker, VlPrecoVendaUnitario, DsProduto, DsMarca, DsUnidade) " +
                        "Values (@IdPedido, @QtProduto, @VlUnitario, @VlUnitarioMinimo, @VlTotal, @NrDiasPrazoEntrega, @VlPrecoCompra, @TxIcms, " +
                        "@TxIcmsEntrada, @TxIPICompra, @VlDespesasCompra, @NrDiasCondicoesPgtoCompra, @NrDiasCondicoesPagtoVenda, @TxIcmsSaida, " +
                        "@TxIPIVenda, @VlComissaoBroker, @VlPrecoVendaUnitario, @DsProduto, @DsMarca, @DsUnidade)";

                    foreach (var item in obj.DetalhePedido)
                    {
                        db.Query(query, new
                        {
                            IdPedido = codigoPedido,
                            QtProduto = item.QuantidadeProduto,
                            VlUnitario = item.ValorUnitario,
                            VlUnitarioMinimo = item.ValorUnitarioMinimo,
                            VlTotal = item.ValorTotal,
                            NrDiasPrazoEntrega = item.NumeroDiasPrazoEntrega,
                            VlPrecoCompra = item.ValorPrecoCompra,
                            TxIcms = item.PercentualIcms,
                            TxIcmsEntrada = item.PercentualIcmsEntrada,
                            TxIPICompra = item.PercentualIPICompra,
                            VlDespesasCompra = item.ValorDespesasCompra,
                            NrDiasCondicoesPgtoCompra = item.NumeroDiasCondicoesPagamentoCompra,
                            NrDiasCondicoesPagtoVenda = item.NumeroDiasCondicoesPagamentoVenda,
                            TxIcmsSaida = item.PercentualIcmsSaida,
                            TxIPIVenda = item.PercentualIPIVenda,
                            VlComissaoBroker = item.ValorComissaoBroker,
                            VlPrecoVendaUnitario = item.ValorPrecoVendaUnitario,
                            DsProduto = item.DescricaoProduto,
                            DsMarca = item.Marca,
                            DsUnidade = item.Unidade
                        });
                    }

                    scope.Complete();
                }
            }
        }
    }
}

