using System.Collections.Generic;

namespace ShoppLab.Domain.Interfaces
{
    public interface IServiceBase<TEntity> where TEntity : class
    {
        void Add(TEntity obj);

        IEnumerable<TEntity> GetAll();

        TEntity GetById(int id);

        void Update(TEntity obj);

        void Remove(TEntity obj);

        void Dispose();
    }
}
