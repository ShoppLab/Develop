﻿using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;
using ShoppLab.Utility;
using System.Linq;

namespace ShoppLab.Service
{
    public class UsuarioService : ServiceBase<Usuario>, IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioService(IUsuarioRepository usuarioRepository)
            :base(usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        public bool ValidadeSenha(string usuario, string senha)
        {
            var retEncryptedValue = Encrypt.Encrypted(senha);
            return _usuarioRepository.Find(x => x.Nome == usuario && x.Senha == retEncryptedValue).FirstOrDefault() != null;
        }
    }
}
