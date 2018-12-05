using ShoppLab.Domain.Entities;
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
            return View();
        }

        [HttpPost]
        public ActionResult Cadastrar(PedidoViewModel pedido, List<Pedido> pedidos, List<DetalhePedido> detalhePedidos)
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