using ShoppLab.Domain.Entities;
using System.Data.Entity.ModelConfiguration;

namespace ShoppLab.Repository.EntityMapping
{
    public class ClienteMap : EntityTypeConfiguration<Cliente>
    {
        public ClienteMap()
        {
            // Primary Key
            HasKey(t => t.Id);

            // Properties
            Property(t => t.Nome)
                .IsRequired()
                .HasMaxLength(60);

            Property(t => t.DataRegistro)
            .IsRequired();

            // Table & Column Mappings
            ToTable("Cliente");
            Property(t => t.Id).HasColumnName("IdCliente");
            Property(t => t.Nome).HasColumnName("NmCliente");
            Property(t => t.DataRegistro).HasColumnName("DtRegistro");
            Property(t => t.Telefone).HasColumnName("NrContato");
            Property(t => t.Email).HasColumnName("DsEmail");

        }
    }
}
