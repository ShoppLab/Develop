using Microsoft.VisualStudio.TestTools.UnitTesting;
using ServiceLocation;
using ShoppLab.Domain.Entities;
using ShoppLab.IoC;
using ShoppLab.IoC.App_Start;
using ShoppLab.Repository.Repository;
using System;
using System.Collections.Generic;

namespace ShoppLab.Repository.Test
{
    [TestClass]
    public class PedidoRepositoryTest
    {
        public PedidoRepositoryTest()
        {
            SimpleInjectorInitializer.Initializer();
            ServiceLocator.SetLocatorProvider(() => new SimpleInjectorServiceLocatorAdapter(SimpleInjectorInitializer.Container));
        }

        [TestMethod]
        public void Adicionar_Um_Pedido()
        {
            try
            {
                var pedidoRepository = new PedidoRepository();
                var pedido = new Pedido
                {
                    DataRegistro = DateTime.Now,
                    CondicoesPagto = "30/60/90/120",
                    CondicoesEntrega = "30",
                    Contato = "LeBron James",
                    DiasValidadePreco = "28",
                    Cliente = new Cliente
                    {
                        Nome = "Albert Einstein",
                        DataRegistro = DateTime.Now 
                    },

                    DetalhePedido = new List<DetalhePedido>
                    {
                        new DetalhePedido
                        {
                            DescricaoProduto = "Porca de pressão 5/8",
                            Marca = "Belzer",
                            Unidade = "Peça",
                            QuantidadeProduto = 20000,
                            ValorUnitario = Convert.ToDecimal(.30),
                            ValorUnitarioMinimo = Convert.ToDecimal(25),
                            ValorTotal = Convert.ToDecimal(6000),
                            ValorComissaoBroker = Convert.ToDecimal(600),
                            ValorPrecoVendaUnitario = Convert.ToDecimal(.60),
                            ValorPrecoCompra = Convert.ToDecimal(.15),
                            ValorDespesasCompra = Convert.ToDecimal(150),
                            PercentualIcms = Convert.ToDecimal(10),
                            PercentualIcmsEntrada = Convert.ToDecimal(8),
                            PercentualIcmsSaida = Convert.ToDecimal(5),
                            PercentualIPIVenda = Convert.ToDecimal(18),
                            PercentualIPICompra = Convert.ToDecimal(16),
                            NumeroDiasPrazoEntrega = 30,
                            NumeroDiasCondicoesPagamentoVenda = 180,
                            NumeroDiasCondicoesPagamentoCompra = 120
                        },

                         new DetalhePedido
                        {
                            DescricaoProduto = "Porca de pressão 1/2",
                            Marca = "Belzer",
                            Unidade = "Peça",
                            QuantidadeProduto = 20000,
                            ValorUnitario = Convert.ToDecimal(.30),
                            ValorUnitarioMinimo = Convert.ToDecimal(25),
                            ValorTotal = Convert.ToDecimal(6000),
                            ValorComissaoBroker = Convert.ToDecimal(600),
                            ValorPrecoVendaUnitario = Convert.ToDecimal(.60),
                            ValorPrecoCompra = Convert.ToDecimal(.15),
                            ValorDespesasCompra = Convert.ToDecimal(150),
                            PercentualIcms = Convert.ToDecimal(10),
                            PercentualIcmsEntrada = Convert.ToDecimal(8),
                            PercentualIcmsSaida = Convert.ToDecimal(5),
                            PercentualIPIVenda = Convert.ToDecimal(18),
                            PercentualIPICompra = Convert.ToDecimal(16),
                            NumeroDiasPrazoEntrega = 30,
                            NumeroDiasCondicoesPagamentoVenda = 180,
                            NumeroDiasCondicoesPagamentoCompra = 120
                        }
                    }
                };

                pedidoRepository.Add(pedido);
                pedidoRepository.SaveChanges();

                Assert.IsTrue(true);
            }
            catch (Exception ex)
            {
                Assert.IsTrue(false);
            }
        }
    }
}
