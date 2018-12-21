
using System;
using System.Collections.Generic;

namespace ShoppLab.Domain.Entities
{


    public partial class Pedido
    {

        public Pedido()
        {
            DetalhePedido = new List<DetalhePedido>();
        }

        public int Id { get; set; }

        public int IdCliente { get; set; }

        public DateTime DataRegistro { get; set; }

        public string CondicoesPagto { get; set; }

        public string CondicoesEntrega { get; set; }

        public string Contato { get; set; }

        public string DiasValidadePreco { get; set; }

        public virtual Cliente Cliente { get; set; }

        public virtual IList<DetalhePedido> DetalhePedido { get; set; }
    }
}
