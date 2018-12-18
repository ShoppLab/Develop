using System.Collections.Generic;

namespace ShoppLab.Mappers
{
    public class ClienteViewModel
    {

        public int Id { get; set; }

        public string Nome { get; set; }

        public string DataRegistro { get; set; }

        public string Telefone { get; set; }

        public string Email { get; set; }

        public virtual IEnumerable<PedidoViewModel> Pedidos { get; set; }

    }
}