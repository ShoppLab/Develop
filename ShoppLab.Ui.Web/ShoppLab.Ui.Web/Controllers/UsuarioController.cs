using ShoppLab.Domain.Interfaces;
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


        public JsonResult ValidadeSenha(string usuario, string senha)
        {
            _UsuarioService.ValidadeSenha(usuario, senha);
        }

    }
}