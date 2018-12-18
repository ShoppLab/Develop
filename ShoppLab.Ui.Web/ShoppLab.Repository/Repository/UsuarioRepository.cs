﻿using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;
using ShoppLab.Repository.Context;

namespace ShoppLab.Repository.Repository
{
    public class UsuarioRepository : RepositoryBase<Usuario, DbModeloContext>, IUsuarioRepository
    {
    }
}
