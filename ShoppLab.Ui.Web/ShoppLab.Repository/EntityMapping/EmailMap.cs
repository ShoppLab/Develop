using ShoppLab.Domain.Entities;
using System.Data.Entity.ModelConfiguration;

namespace ShoppLab.Repository.EntityMapping
{
    public class EmailMap : EntityTypeConfiguration<Email>
    {
        public EmailMap()
        {
            // Primary Key
            HasKey(t => t.Id);

            // Properties
            Property(t => t.Descricao)
                .IsRequired()
                .HasMaxLength(60);

            // Table & Column Mappings
            ToTable("Email");
            Property(t => t.Id).HasColumnName("IdEmail");
            Property(t => t.IdCliente).HasColumnName("IdCliente");
            Property(t => t.Descricao).HasColumnName("DsEmail");
            

        }
    }
}
