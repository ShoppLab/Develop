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

        [Required(ErrorMessage = " ")]
        public string Nome { get; set; }

        [Required(ErrorMessage = " ")]
        public string DataRegistro { get; set; }

        [Required(ErrorMessage = " ")]
        public string Email { get; set; }

        [Required(ErrorMessage = " ")]
        public string Telefone { get; set; }

        [Required(ErrorMessage = " ")]
        public string CondicoesPagto { get; set; }

        [Required(ErrorMessage = " ")]
        public string CondicoesEntrega { get; set; }

        [Required(ErrorMessage = " ")]
        public string Contato { get; set; }

        [Required(ErrorMessage = " ")]
        public string DiasValidadePreco { get; set; }

        public ClienteViewModel Cliente { get; set; }

        public List<DetalhePedidoViewModel> DetalhePedido { get; set; }

    }
}