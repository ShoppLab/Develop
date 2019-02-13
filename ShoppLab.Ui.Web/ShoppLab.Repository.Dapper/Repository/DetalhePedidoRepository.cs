using Dapper;
using ShoppLab.Domain.Interfaces;
using System.Text;

namespace ShoppLab.Repository.Dapper.Repository
{
    public class DetalhePedidoRepository : RepositoryBase, IDetalhePedidoRepository
    {
        public void Remove(int id)
        {
            StringBuilder query = new StringBuilder();
            query.AppendLine("Delete from DetalhePedido Where IdDetalhePedido = @id");


            using (var db = Connection())
            {
                db.Query(query.ToString(), param: new { id });
            }
        }
    }
}
