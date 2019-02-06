using ShoppLab.Domain.Entities;
using System;
using System.Collections.Generic;

namespace ShoppLab.Domain.Interfaces
{
    public interface IPedidoRepository
    {
        List<Pedido> ObterDadosPedidos(DateTime? dataInicial, DateTime? dataFinal, string nomeCliente);

        void Salvar(Pedido obj);


    }
}
