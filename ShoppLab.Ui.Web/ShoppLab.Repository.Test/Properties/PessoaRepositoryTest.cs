using Microsoft.VisualStudio.TestTools.UnitTesting;
using ShoppLab.Domain.Entities;
using ShoppLab.Repository.Repository;
using System;

namespace ShoppLab.Repository.Test.Properties
{
    [TestClass]
    public class PessoaRepositoryTest
    {
        [TestMethod]
        public void Adicionar_Pessoa()
        {
            try
            {
                var repository = new ClienteRepository();
                repository.Add(new Cliente
                {
                    Nome = "Test Pessoa 1"
                });
                repository.SaveChanges();
                Assert.IsTrue(true);
            }
            catch
            {
                Assert.IsTrue(false); 
            }
        }
    }
}
