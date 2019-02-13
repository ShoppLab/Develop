using ShoppLab.Utility;
using System.Configuration;
using System.Data.SqlClient;

namespace ShoppLab.Repository.Dapper.Repository
{
    public class RepositoryBase 
    {

        public SqlConnection Connection()
        {
            return new SqlConnection(Encrypt.Decrypt(ConfigurationManager.ConnectionStrings["DBShoppLab"].ConnectionString));
            //return new SqlConnection(ConfigurationManager.ConnectionStrings["DBShoppLab"].ConnectionString);

        }
    }
}
