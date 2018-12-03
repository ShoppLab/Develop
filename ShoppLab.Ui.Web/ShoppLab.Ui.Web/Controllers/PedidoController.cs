using ShoppLab.Ui.Web.ViewModel;
using System.Web.Mvc;

namespace ShoppLab.Ui.Web.Controllers
{
    public class PedidoController : Controller
    {
        [HttpGet]
        public ActionResult Cadastrar()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Cadastrar(ClienteViewModel cliente)
        {
            return View();
        }

        public ActionResult Consultar()
        {
            return View();
        }
    }
}