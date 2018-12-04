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
        public ActionResult Cadastrar(PedidoViewModel pedido)
        {
            if (ModelState.IsValid)
            {
               
            }

            return View();
        }

        public ActionResult Consultar()
        {
            return View();
        }
    }
}