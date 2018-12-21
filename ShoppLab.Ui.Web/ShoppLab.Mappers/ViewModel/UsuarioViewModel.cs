using System.ComponentModel.DataAnnotations;

namespace ShoppLab.Mappers.ViewModel
{
    public class UsuarioViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Preencha o nome")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Preencha a senha")]
        public string Senha { get; set; }
    }
}
