using ShoppLab.Domain.Interfaces;
using ShoppLab.Mappers.ViewModel;
using ShoppLab.Utility;
using System.Web.Mvc;

namespace ShoppLab.Ui.Web.Controllers
{
    public class UsuarioController : Controller
    {
        private readonly IUsuarioService _UsuarioService;


        public UsuarioController(IUsuarioService usuarioService)
        {
            _UsuarioService = usuarioService;
        }

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(UsuarioViewModel model)
        {
            var ret = _UsuarioService.ValidadeSenha(model.Nome, model.Senha);
           
            if (ret)
            {
                return RedirectToAction("Consultar", "Pedido");
            }
            else
            {
                ModelState.AddModelError("SemUsuario", @"Usuário/Senha inválido!");
                return View(model);
            }

        }
    }
}