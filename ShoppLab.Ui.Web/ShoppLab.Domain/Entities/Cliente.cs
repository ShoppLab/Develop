using System;
using System.Collections.Generic;

namespace ShoppLab.Domain.Entities
{
    public partial class Cliente
    {
        public Cliente()
        {
            Emails = new List<Email>();
            Contatos = new List<Contato>();
            Pedidos = new List<Pedido>();
        }

        public int Id { get; set; }

        public string Nome { get; set; }

        public DateTime DataRegistro { get; set; }

        public virtual ICollection<Email> Emails { get; set; }

        public virtual ICollection<Contato> Contatos { get; set; }

        public virtual ICollection<Pedido> Pedidos { get; set; }

    }
}
