using ShoppLab.Repository.Interfaces;
using System.Web;

namespace ShoppLab.Repository.EntityMapping
{
    public class ContextManager<TContext> : IContextManager<TContext> where TContext : IDbContext, new()
    {
        private const string ContextKey = "ContextManager.Context";
        public IDbContext GetContext()
        {
            if (HttpContext.Current == null)
            {
                var retorno = new TContext();
                return (IDbContext)retorno;
            }

            if (HttpContext.Current.Items[ContextKey] == null)
            {
                HttpContext.Current.Items[ContextKey] = new TContext();
            }

            return (IDbContext)HttpContext.Current.Items[ContextKey];
        }
    }
}
