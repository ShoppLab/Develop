using System;
using System.Collections.Generic;
using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;
using ShoppLab.Repository.Context;
using System.Linq;

namespace ShoppLab.Repository.Repository
{
    public class PedidoRepository : RepositoryBase<Pedido, DbModeloContext>, IPedidoRepository
    {
        public IEnumerable<Pedido> ObterDadosPedidos(DateTime? dataInicial, DateTime? dataFinal, string nomeCliente)
        {
            IEnumerable<Pedido> query = null;

            if (dataInicial != null && dataFinal != null)

                query = Find(x => x.DataRegistro >= dataInicial && x.DataRegistro <= dataFinal);

            if (dataInicial != null && dataFinal == null)
                query = Find(x => x.DataRegistro >= dataInicial);

            if (dataInicial == null && dataFinal != null)
                query = Find(x => x.DataRegistro <= dataFinal);

            if (nomeCliente != "")
                query = Find(x => x.Cliente.Nome.Contains(nomeCliente));


            return query.ToList();
        }
    }
}
