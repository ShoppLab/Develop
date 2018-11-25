using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace ShoppLab.Domain.Interfaces
{
    public interface IRepositoryBase<TEntity> : IDisposable where TEntity : class
    {
        void Add(TEntity obj);

        IEnumerable<TEntity> GetAll();

        void Update(TEntity obj);

        void Remove(TEntity obj);

        IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);

        void SaveChanges();

    }
}
