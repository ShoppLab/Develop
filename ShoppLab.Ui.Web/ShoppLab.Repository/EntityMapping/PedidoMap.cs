using ShoppLab.Domain.Entities;
using System.Data.Entity.ModelConfiguration;

namespace ShoppLab.Repository.EntityMapping
{
    public class PedidoMap : EntityTypeConfiguration<Pedido>
    {
        public PedidoMap()
        {
            // Primary Key
            HasKey(t => t.Id);

            // Properties
            Property(t => t.CondicoesPagto)
                .IsOptional()
                .HasMaxLength(60);

            Property(t => t.CondicoesEntrega)
                .IsOptional()
                .HasMaxLength(60);

            Property(t => t.Contato)
                .IsOptional()
                .HasMaxLength(60);

            Property(t => t.DiasValidadePreco)
                .IsOptional();

            Property(t => t.DataRegistro)
                .IsOptional();

            // Table & Column Mappings
            ToTable("Pedido");
            Property(t => t.Id).HasColumnName("IdPedido");
            Property(t => t.IdCliente).HasColumnName("IdCliente");

            Property(t => t.DataRegistro).HasColumnName("DtRegistro");
            Property(t => t.CondicoesPagto).HasColumnName("DsCondicoesPagto");
            Property(t => t.CondicoesEntrega).HasColumnName("DsCondicoesEntrega");
            Property(t => t.Contato).HasColumnName("DsContato");
            Property(t => t.DiasValidadePreco).HasColumnName("NrDiasValidadePreco");

            // Relationships
            this.HasRequired(t => t.Cliente)
            .WithMany(t => t.Pedidos)
            .HasForeignKey(d => d.IdCliente);
        }
    }
}
