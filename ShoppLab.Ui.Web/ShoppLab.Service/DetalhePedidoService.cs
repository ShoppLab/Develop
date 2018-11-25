using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;

namespace ShoppLab.Service
{
    public class DetalhePedidoService : ServiceBase<DetalhePedido>, IDetalhePedidoService
    {
        private readonly IDetalhePedidoRepository _detalhePedidoRepository;

        public DetalhePedidoService(IDetalhePedidoRepository detalhePedidoRepository)
            :base(detalhePedidoRepository)
        {
            _detalhePedidoRepository = detalhePedidoRepository;
        }
    }
}
