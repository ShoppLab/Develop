using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ShoppLab.Mappers
{
    public class PedidoViewModel
    {
        public PedidoViewModel()
        {
            DetalhePedido = new List<DetalhePedidoViewModel>();
        }

        public int Id { get; set; }

        public int IdCliente { get; set; }

        [Required(ErrorMessage = "xxxx")]
        [Display(Name = "Nome")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "xxxxx")]
        [Display(Name = "Data de registro")]
        public string DataRegistro { get; set; }

        [Description("Email do cliente")]
        [Display(Name = "E-mail")]
        public string Email { get; set; }

        [Description("Telefone do cliente")]
        [Display(Name = "Telefone")]
        public string Telefone { get; set; }

        public string CondicoesPagto { get; set; }

        public string CondicoesEntrega { get; set; }

        public string Contato { get; set; }

        public string DiasValidadePreco { get; set; }

        public ClienteViewModel Cliente { get; set; }

        public List<DetalhePedidoViewModel> DetalhePedido { get; set; }

    }
}