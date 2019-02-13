using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ShoppLab.Service
{
    public class PedidoService: IPedidoService
    {
        private readonly IPedidoRepository _pedidoRepository;

        public PedidoService(IPedidoRepository pedidoRepository)
            
        {
            _pedidoRepository = pedidoRepository;
        }

        public Pedido GetById(int id)
        {
            return _pedidoRepository.GetById(id);
        }

        public IEnumerable<Pedido> ObterDadosPedidos(DateTime? dataInicial, DateTime? dataFinal, string nomeCliente)
        {
            return _pedidoRepository.ObterDadosPedidos(dataInicial, dataFinal, nomeCliente);
        }

        public void Salvar(Pedido pedido)
        {

            if (pedido.Id == 0)
            {
                pedido.DataRegistro = DateTime.Now;
                _pedidoRepository.Salvar(pedido);
            }
            else
            {
                //var obj = GetById(pedido.Id);
                //obj.CondicoesEntrega = pedido.CondicoesEntrega;
                //obj.CondicoesPagto = pedido.CondicoesPagto;
                //obj.DiasValidadePreco = pedido.DiasValidadePreco;

                ////Adiciona os novos itens
                //foreach (var item in pedido.DetalhePedido)
                //{
                //    if (item.Id == 0 || item.Id < 0)
                //    {
                //        item.Id = 0;
                //        obj.DetalhePedido.Add(item);
                //    }
                //}

                //_pedidoRepository.Update(obj);
                //_pedidoRepository.SaveChanges();
            }
        }
    }
}
