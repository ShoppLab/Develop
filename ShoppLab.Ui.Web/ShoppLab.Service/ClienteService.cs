using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;

namespace ShoppLab.Service
{
    public class ClienteService : ServiceBase<Cliente>, IClienteService
    {
        private readonly IClienteRepository _clienteRepository;

        public ClienteService(IClienteRepository clienteRepository)
            :base(clienteRepository)
        {
            _clienteRepository = clienteRepository;
        }
    }
}
