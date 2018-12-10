using ShoppLab.Ui.Web.ViewModel;
using System.Collections.Generic;
using System.Web.Mvc;

namespace ShoppLab.Ui.Web.Controllers
{
    public class PedidoController : Controller
    {
        [HttpGet]
        public ActionResult Cadastrar()
        {
            return View(new PedidoViewModel { Nome = "Roberto Carlos Queiroz Oliveira", Email = "rcqoliveira@icloud.com", DataRegistro = "09/12/2018", Telefone = "11964440102" });
        }
        
        [HttpPost]
        public JsonResult Cadastrar(PedidoViewModel model, List<DetalhePedidoViewModel> detalhePedidos)
        {
            if (ModelState.IsValid)
            {

            }
            return Json("", JsonRequestBehavior.AllowGet);
        }

        public ActionResult Consultar()
        {
            return View();
        }
    }
}