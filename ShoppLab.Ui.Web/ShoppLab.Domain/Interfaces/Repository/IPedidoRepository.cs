using ShoppLab.Domain.Entities;
using System;
using System.Collections.Generic;

namespace ShoppLab.Domain.Interfaces
{
    public interface IPedidoRepository : IRepositoryBase<Pedido>
    {
        IEnumerable<Pedido> ObterDadosPedidos(DateTime? dataInicial, DateTime? dataFinal, string nomeCliente);
    }
}
