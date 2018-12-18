using ShoppLab.Domain.Entities;

namespace ShoppLab.Domain.Interfaces
{
    public interface IUsuarioService : IServiceBase<Usuario>
    {
        bool ValidadeSenha(string usuario, string senha);
    }
}
