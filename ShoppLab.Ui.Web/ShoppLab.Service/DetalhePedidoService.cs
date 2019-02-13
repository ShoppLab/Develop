using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;
using System.Text;

namespace ShoppLab.Service
{
    public class DetalhePedidoService : IDetalhePedidoService
    {
        private readonly IDetalhePedidoRepository _detalhePedidoRepository;

        public DetalhePedidoService(IDetalhePedidoRepository detalhePedidoRepository)
        {
            _detalhePedidoRepository = detalhePedidoRepository;
        }

        public void Remove(int id)
        {
            _detalhePedidoRepository.Remove(id);
        }

    }
}
