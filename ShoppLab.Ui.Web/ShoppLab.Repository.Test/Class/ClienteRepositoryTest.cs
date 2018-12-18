using Microsoft.VisualStudio.TestTools.UnitTesting;
using ServiceLocation;
using ShoppLab.Domain.Entities;
using ShoppLab.IoC;
using ShoppLab.IoC.App_Start;
using ShoppLab.Repository.Repository;
using System;

namespace ShoppLab.Repository.Test
{
    [TestClass]
    public class ClienteRepositoryTest
    {
        public ClienteRepositoryTest()
        {
            SimpleInjectorInitializer.Initializer();
            ServiceLocator.SetLocatorProvider(() => new SimpleInjectorServiceLocatorAdapter(SimpleInjectorInitializer.Container));
        }

        [TestMethod]
        public void Adicionar_Uma_Cliente()
        {
            try
            {
                var clienteRepository = new ClienteRepository();
                var cliente = new Cliente
                {
                    Nome = "Albert Einstein",
                    DataRegistro = DateTime.Now
                };

                //cliente.Emails.Add(new Email { Descricao = "albertEinstein@usa.gov.com" });
                //cliente.Emails.Add(new Email { Descricao = "albertEinstein@usa.com" });

                //cliente.Contatos.Add(new Contato { Ddd = 11, Numero = "96444-0908" });
                //cliente.Contatos.Add(new Contato { Ddd = 11, Numero = "96444-0909" });
                //cliente.Contatos.Add(new Contato { Ddd = 11, Numero = "96444-0910" });

                clienteRepository.Add(cliente);
                clienteRepository.SaveChanges();

                Assert.IsTrue(true);
            }
            catch (Exception ex)
            {
                Assert.IsTrue(false);
            }
        }
    }
}
