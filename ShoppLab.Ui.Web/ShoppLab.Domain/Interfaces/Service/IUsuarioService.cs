namespace ShoppLab.Domain.Interfaces
{
    public interface IUsuarioService
    {
        bool ValidarSenha(string usuario, string senha);
    }
}
