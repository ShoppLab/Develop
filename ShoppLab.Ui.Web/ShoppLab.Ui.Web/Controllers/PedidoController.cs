using AutoMapper;
using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;
using ShoppLab.Mappers;
using System;
using System.Collections.Generic;
using System.Web.Mvc;
using System.Linq;

namespace ShoppLab.Ui.Web.Controllers
{
    public class PedidoController : Controller
    {
        private readonly IPedidoService _pedidoService;

        public PedidoController(IPedidoService pedidoService)
        {
            _pedidoService = pedidoService;
        }

        [HttpGet]
        public ActionResult Cadastrar()
        {
            return View(new PedidoViewModel
            {
                Nome = "Roberto Carlos Queiroz Oliveira",
                Email = "rcqoliveira@icloud.com",
                Telefone = "11964440102",
                DataRegistro = "16/12/2019",
                CondicoesPagto = "18 DDL",
                DiasValidadePreco = "10 Dias",
                CondicoesEntrega = "FOB - NOSSO DEPOSITO EM SP.",

            });
        }

        [HttpPost]
        public JsonResult Cadastrar(PedidoViewModel model, List<DetalhePedidoViewModel> detalhePedidoViewModel)
        {
            if (ModelState.IsValid)
            {
                var cliente = Mapper.Map<ClienteViewModel, Cliente>(model.Cliente);

                var pedido = Mapper.Map<PedidoViewModel, Pedido>(model);
                var detalhePedido = Mapper.Map<List<DetalhePedidoViewModel>, List<DetalhePedido>>(detalhePedidoViewModel);

                pedido.DetalhePedido = detalhePedido;
                pedido.Cliente = cliente;
                _pedidoService.Salvar(pedido);
            }
            return Json("", JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult Atualizar(int id)
        {
            var item = _pedidoService.GetById(id);

            //var pedidoViewMode = Mapper.Map<Pedido, PedidoViewModel>(item);

            var pedidoViewModel = new PedidoViewModel
            {
                DataRegistro = item.DataRegistro.ToString("dd/MM/yyyy"),
                CondicoesEntrega = item.CondicoesEntrega,
                CondicoesPagto = item.CondicoesPagto,
                Email = item.Cliente.Email,
                Telefone = item.Cliente.Telefone,
                DiasValidadePreco = item.DiasValidadePreco,
                Nome = item.Cliente.Nome
            };

            return View(pedidoViewModel);
        }


        public ActionResult Consultar()
        {
            return View();
        }

        public JsonResult ObterDadosPedidos(string dataInicial, string dataFinal, string nomeCliente)
        {
            DateTime? dtInicial = null;
            DateTime? dtFinal = null;

            if (!string.IsNullOrEmpty(dataInicial))
            {
                dtInicial = DateTime.Parse(dataInicial);
            }
            if (!string.IsNullOrEmpty(dataFinal))
            {
                dtFinal = DateTime.Parse(dataFinal);
            }

            var itens = _pedidoService.ObterDadosPedidos(dtInicial, dtFinal, nomeCliente).Select(x => new
            {
                Pedido = x.Id,
                DataRegistro = x.DataRegistro.ToString("dd/MM/yyyy"),
                x.Cliente.Nome,
                PrecoVendaUnitario = x.DetalhePedido.Sum(y => y.ValorPrecoVendaUnitario).ToString("###.00")
            }).ToList();

            return Json(itens, JsonRequestBehavior.AllowGet);
        }
    }
}