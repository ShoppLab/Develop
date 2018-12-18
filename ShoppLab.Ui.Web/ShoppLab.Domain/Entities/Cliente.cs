using System;
using System.Collections.Generic;

namespace ShoppLab.Domain.Entities
{
    public partial class Cliente
    {
        public Cliente()
        {
            Pedidos = new List<Pedido>();
        }

        public int Id { get; set; }

        public string Nome { get; set; }

        public DateTime DataRegistro { get; set; }

        public string Telefone { get; set; }

        public string Email { get; set; }

        public virtual ICollection<Pedido> Pedidos { get; set; }

    }
}
