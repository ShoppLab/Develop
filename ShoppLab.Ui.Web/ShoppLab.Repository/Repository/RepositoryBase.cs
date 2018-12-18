using ServiceLocation;
using ShoppLab.Domain.Interfaces;
using ShoppLab.Repository.EntityMapping;
using ShoppLab.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace ShoppLab.Repository.Repository
{
    public class RepositoryBase<TEntity, TContext> : IRepositoryBase<TEntity>
        where TEntity : class
        where TContext : IDbContext, new()
    {

        private readonly ContextManager<TContext> _contextManager = ServiceLocator.Current.GetInstance<IContextManager<TContext>>() as ContextManager<TContext>;

        protected IDbSet<TEntity> DbSet;
        protected readonly IDbContext Context;

        public RepositoryBase()
        {
            Context = _contextManager.GetContext();
            DbSet = Context.Set<TEntity>();
        }

        public void Add(TEntity obj)
        {
            try
            {
                DbSet.Add(obj);
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate)
        {
            return DbSet.Where(predicate);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return DbSet.ToList();
        }

        public TEntity GetById(int id)
        {
            return DbSet.Find(id);
        }

        public void Remove(TEntity obj)
        {
            throw new NotImplementedException();
        }

        public void SaveChanges()
        {
            Context.SaveChanges();
        }

        public void Update(TEntity obj)
        {
            var entry = Context.Entry(obj);
            DbSet.Attach(obj);
            entry.State = EntityState.Modified;
            SaveChanges();
        }

        public void Dispose()
        {
            Context.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}
