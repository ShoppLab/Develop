
namespace ShoppLab.Domain.Entities
{
    public partial class Email
    {
        public int Id { get; set; }

        public string Descricao { get; set; }

        public int IdCliente { get; set; }

        public Cliente Cliente { get; set; }
    }
}
