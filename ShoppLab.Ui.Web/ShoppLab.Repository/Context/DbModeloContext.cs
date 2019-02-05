using ShoppLab.Domain.Entities;
using ShoppLab.Repository.EntityMapping;
using ShoppLab.Utility;
using System.Configuration;
using System.Data.Entity;

namespace ShoppLab.Repository.Context
{
    public class DbModeloContext : BaseDbContext
    {
        protected static string GetConnection
        {
            get
            {
                return Encrypt.Decrypt(ConfigurationManager.ConnectionStrings["DBShoppLab"].ConnectionString);
            }
        }

        public DbModeloContext()
            : base(GetConnection)
        {
            //Configuration.AutoDetectChangesEnabled = false;
            //Configuration.ProxyCreationEnabled = false;
        }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Email> Emails { get; set; }
        public DbSet<Contato> Contatos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<DetalhePedido> DetalhePedidos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }



        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new ClienteMap());
            modelBuilder.Configurations.Add(new EmailMap());
            modelBuilder.Configurations.Add(new ContatoMap());
            modelBuilder.Configurations.Add(new PedidoMap());
            modelBuilder.Configurations.Add(new DetalhePedidoMap());
            modelBuilder.Configurations.Add(new UsuarioMap());

        }
    }
}
