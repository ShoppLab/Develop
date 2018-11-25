using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;

namespace ShoppLab.Service
{
    public class ContatoService : ServiceBase<Contato>, IContatoService
    {
        private readonly IContatoRepository _contatoRepository;

        public ContatoService(IContatoRepository contatoRepository)
            :base(contatoRepository)
        {
            _contatoRepository = contatoRepository;
        }
    }
}
