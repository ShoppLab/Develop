using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;

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
    }
}
