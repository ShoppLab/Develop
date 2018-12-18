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
            var ret = _UsuarioService.ValidadeSenha(usuario, senha);
            ret = true;
            if (ret)
            {

            }
            else
            {

            }
            return Json(ret, JsonRequestBehavior.AllowGet);

        }

    }
}