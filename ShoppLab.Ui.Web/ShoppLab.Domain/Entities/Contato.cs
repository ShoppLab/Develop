
namespace ShoppLab.Domain.Entities
{
    public partial class Contato
    {
        public int Id { get; set; }

        public int IdCliente { get; set; }

        public int Ddd { get; set; }

        public string Numero { get; set; }

        public virtual Cliente Cliente { get; set; }

    }
}
