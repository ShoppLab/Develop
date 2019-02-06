using Dapper;
using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;
using System;
using System.Linq;

namespace ShoppLab.Repository.Dapper.Repository
{
    public class UsuarioRepository : RepositoryBase, IUsuarioRepository
    {

        public bool ValidarSenha(string nome, string senha)
        {

            using (var db = Connection())
            {
                db.Open();
                var query = "Select NmUsuario Nome, DsSenha Senha From Usuario Where NmUsuario = @nome And DsSenha =@senha";
                return db.Query<Usuario>(query, new { nome, senha }).FirstOrDefault() != null;
            }
        }
    }
}
