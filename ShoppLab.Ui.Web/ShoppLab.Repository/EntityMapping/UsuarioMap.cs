using ShoppLab.Domain.Entities;
using System.Data.Entity.ModelConfiguration;

namespace ShoppLab.Repository.EntityMapping
{
    public class UsuarioMap : EntityTypeConfiguration<Usuario>
    {
        public UsuarioMap()
        {
            // Primary Key
            HasKey(t => t.Id);

            // Properties
            Property(t => t.Nome)
                .IsRequired()
                .HasMaxLength(20);

            Property(t => t.Senha)
                .IsRequired()
                .HasMaxLength(20);

            // Table & Column Mappings
            ToTable("Usuario");
            Property(t => t.Id).HasColumnName("IdUsuario");
            Property(t => t.Nome).HasColumnName("NmUsuario");
            Property(t => t.Senha).HasColumnName("DsSenha");

        }
    }
}
