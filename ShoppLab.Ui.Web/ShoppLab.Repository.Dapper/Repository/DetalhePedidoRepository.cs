using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace ShoppLab.Repository.Dapper.Repository
{
    public class DetalhePedidoRepository : RepositoryBase, IDetalhePedidoRepository
    {
        public void Add(DetalhePedido obj)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<DetalhePedido> Find(Expression<Func<DetalhePedido, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<DetalhePedido> GetAll()
        {
            throw new NotImplementedException();
        }

        public DetalhePedido GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Remove(DetalhePedido obj)
        {
            throw new NotImplementedException();
        }

        public void Remove(int id)
        {
            throw new NotImplementedException();
        }

        public void SaveChanges()
        {
            throw new NotImplementedException();
        }

        public void Update(DetalhePedido obj)
        {
            throw new NotImplementedException();
        }
    }
}
