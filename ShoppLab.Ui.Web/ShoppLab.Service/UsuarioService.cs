using ShoppLab.Domain.Interfaces;
using ShoppLab.Utility;

namespace ShoppLab.Service
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        bool IUsuarioService.ValidarSenha(string usuario, string senha)
        {
            var senhaEncryptedValue = Encrypt.Encrypted(senha);
            return _usuarioRepository.ValidarSenha(usuario, senhaEncryptedValue);
        }
    }
}
