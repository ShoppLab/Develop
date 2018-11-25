using ShoppLab.Domain.Entities;
using System.Data.Entity.ModelConfiguration;

namespace ShoppLab.Repository.EntityMapping
{
    public class DetalhePedidoMap : EntityTypeConfiguration<DetalhePedido>
    {
        public DetalhePedidoMap()
        {
            // Primary Key
            HasKey(t => t.Id);

            // Properties
            Property(t => t.DescricaoProduto)
                .IsOptional()
                .HasMaxLength(100);

            Property(t => t.Marca)
                .IsOptional()
                .HasMaxLength(30);

            Property(t => t.Unidade)
                .IsOptional()
                .HasMaxLength(30);

            Property(t => t.QuantidadeProduto)
                .IsOptional()
                .HasPrecision(18,2);

            Property(t => t.ValorUnitario)
                .IsOptional()
                .HasPrecision(18, 2);

            Property(t => t.ValorUnitarioMinimo)
                .IsOptional()
                .HasPrecision(18, 2);

            Property(t => t.ValorTotal)
                .IsOptional()
                .HasPrecision(18, 2);

            Property(t => t.ValorComissaoBroker)
                .IsOptional()
                .HasPrecision(18, 2);

            Property(t => t.ValorPrecoVendaUnitario)
                .IsOptional()
                .HasPrecision(18, 2);

            Property(t => t.ValorPrecoCompra)
                .IsOptional()
                .HasPrecision(18, 2);

            Property(t => t.ValorDespesasCompra)
                .IsOptional()
                .HasPrecision(18, 2);

            Property(t => t.PercentualIcms)
                .IsOptional()
                .HasPrecision(5, 2);

            Property(t => t.PercentualIcmsEntrada)
                .IsOptional()
                .HasPrecision(5, 2);

            Property(t => t.PercentualIcmsSaida)
                .IsOptional()
                .HasPrecision(5, 2);

            Property(t => t.PercentualIPICompra)
                .IsOptional()
                .HasPrecision(5, 2);

            Property(t => t.PercentualIPIVenda)
                .IsOptional()
                .HasPrecision(5, 2);

            Property(t => t.NumeroDiasPrazoEntrega)
                .IsOptional();

            Property(t => t.NumeroDiasCondicoesPagamentoCompra)
                .IsOptional();

            Property(t => t.NumeroDiasCondicoesPagamentoVenda)
                .IsOptional();

            // Table & Column Mappings
            ToTable("DetalhePedido");
            Property(t => t.Id).HasColumnName("IdDetalhePedido");
            Property(t => t.IdPedido).HasColumnName("IdPedido");

            Property(t => t.DescricaoProduto).HasColumnName("DsProduto");
            Property(t => t.Marca).HasColumnName("DsMarca");
            Property(t => t.Unidade).HasColumnName("DsUnidade");
            Property(t => t.QuantidadeProduto).HasColumnName("QtProduto");
            Property(t => t.ValorUnitario).HasColumnName("VlUnitario");
            Property(t => t.ValorUnitarioMinimo).HasColumnName("VlUnitarioMinimo");
            Property(t => t.ValorTotal).HasColumnName("VlTotal");
            Property(t => t.ValorComissaoBroker).HasColumnName("VlComissaoBroker");
            Property(t => t.ValorPrecoVendaUnitario).HasColumnName("VlPrecoVendaUnitario");
            Property(t => t.ValorPrecoCompra).HasColumnName("VlPrecoCompra");
            Property(t => t.ValorDespesasCompra).HasColumnName("VlDespesasCompra");
            Property(t => t.PercentualIcms).HasColumnName("TxIcms");
            Property(t => t.PercentualIcmsEntrada).HasColumnName("TxIcmsEntrada");
            Property(t => t.PercentualIcmsSaida).HasColumnName("TxIcmsSaida");
            Property(t => t.PercentualIPICompra).HasColumnName("TxIPICompra");
            Property(t => t.PercentualIPIVenda).HasColumnName("TxIPIVenda");
            Property(t => t.NumeroDiasPrazoEntrega).HasColumnName("NrDiasPrazoEntrega");
            Property(t => t.NumeroDiasCondicoesPagamentoCompra).HasColumnName("NrDiasCondicoesPgtoCompra");
            Property(t => t.NumeroDiasCondicoesPagamentoVenda).HasColumnName("NrDiasCondicoesPagtoVenda");

            // Relationships
            this.HasRequired(t => t.Pedido)
            .WithMany(t => t.DetalhePedido)
            .HasForeignKey(d => d.IdPedido);
        }
    }
}
