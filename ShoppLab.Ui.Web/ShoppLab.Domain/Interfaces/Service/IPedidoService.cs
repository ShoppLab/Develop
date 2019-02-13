using ShoppLab.Domain.Entities;
using System;
using System.Collections.Generic;

namespace ShoppLab.Domain.Interfaces
{
    public interface IPedidoService
    {
        void Salvar(Pedido pedido);

        IEnumerable<Pedido> ObterDadosPedidos(DateTime? dataInicial, DateTime? dataFinal, string nomeCliente);

        Pedido GetById(int id);

        
    }
}
