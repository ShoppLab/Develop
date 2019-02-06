namespace ShoppLab.Domain.Interfaces
{
    public interface IUsuarioRepository
    {
        bool ValidarSenha(string nome, string senha );
    }
}
