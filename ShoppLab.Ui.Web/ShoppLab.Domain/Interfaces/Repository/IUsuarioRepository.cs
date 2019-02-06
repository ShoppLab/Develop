using ShoppLab.Domain.Entities;
using System;
using System.Collections.Generic;

namespace ShoppLab.Domain.Interfaces
{
    public interface IUsuarioRepository : IDisposable
    {
        bool ValidarSenha(string nome, string senha );

    }
}
