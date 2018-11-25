using ShoppLab.Domain.Entities;
using System.Data.Entity.ModelConfiguration;

namespace ShoppLab.Repository.EntityMapping
{
    public class ContatoMap : EntityTypeConfiguration<Contato>
    {
        public ContatoMap()
        {
            // Primary Key
            HasKey(t => t.Id);

            // Properties
            Property(t => t.Ddd)
                .IsOptional();

            Property(t => t.Numero)
                .IsOptional()
                .HasMaxLength(10);

            // Table & Column Mappings
            ToTable("Contato");
            Property(t => t.Id).HasColumnName("IdContato");
            Property(t => t.IdCliente).HasColumnName("IdCliente");
            Property(t => t.Ddd).HasColumnName("NrDdd");
            Property(t => t.Numero).HasColumnName("NrContato");

            // Relationships
            this.HasRequired(t => t.Cliente)
            .WithMany(t => t.Contatos)
            .HasForeignKey(d => d.IdCliente);

        }
    }
}
