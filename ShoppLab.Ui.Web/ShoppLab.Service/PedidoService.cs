using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;
using System;
using System.Collections.Generic;

namespace ShoppLab.Service
{
    public class PedidoService : ServiceBase<Pedido>, IPedidoService
    {
        private readonly IPedidoRepository _pedidoRepository;

        public PedidoService(IPedidoRepository pedidoRepository)
            :base(pedidoRepository)
        {
            _pedidoRepository = pedidoRepository;
        }

        public IEnumerable<Pedido> ObterDadosPedidos(DateTime? dataInicial, DateTime? dataFinal, string nomeCliente)
        {
            return _pedidoRepository.ObterDadosPedidos(dataInicial, dataFinal, nomeCliente);    
        }

        public void Salvar(Pedido pedido)
        {
            if(pedido.Cliente != null)
            {
                pedido.Cliente.DataRegistro = DateTime.Now;
            }

            _pedidoRepository.Add(pedido);
            _pedidoRepository.SaveChanges();
        }
    }
}
