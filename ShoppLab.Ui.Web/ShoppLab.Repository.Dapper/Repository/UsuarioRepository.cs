using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppLab.Repository.Dapper.Repository
{
    public class UsuarioRepository : RepositoryBase, IUsuarioRepository
    {
        

        public bool ValidarSenha(string nome, string senha)
        {

            

            using (var cn = Connection())

            {

                var query = "Select Count(1) From Usuario Where Nome = @nome And Senha =@senha";

                cn

            }



            return result;
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
