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
        private readonly IDetalhePedidoService _detalhePedidoService;


        public PedidoController(IPedidoService pedidoService, IDetalhePedidoService detalhePedidoService)
        {
            _pedidoService = pedidoService;
            _detalhePedidoService = detalhePedidoService;
        }

        [HttpGet]
        public ActionResult Cadastrar()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Cadastrar(PedidoViewModel model, List<DetalhePedidoViewModel> detalhePedidoViewModel)
        {

            ModelState.Remove("model.Contato");

            try
            {
                if (!ModelState.IsValid)
                {
                    return Json(false, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    var cliente = Mapper.Map<ClienteViewModel, Cliente>(model.Cliente);

                    var pedido = Mapper.Map<PedidoViewModel, Pedido>(model);
                    var detalhePedido = Mapper.Map<List<DetalhePedidoViewModel>, List<DetalhePedido>>(detalhePedidoViewModel);

                    pedido.DetalhePedido = detalhePedido;
                    pedido.Cliente = cliente;
                    _pedidoService.Salvar(pedido);
                    return Json(true, JsonRequestBehavior.AllowGet);
                }
            }
            catch(Exception ex)
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Atualizar(int id)
        {

            var pedido = _pedidoService.GetById(id);

            //var pedidoViewModel = Mapper.Map<Pedido, PedidoViewModel>(item);
            //var pedidoDetalheViewModel = Mapper.Map<IList<DetalhePedido>, IList<DetalhePedidoViewModel>>(item.DetalhePedido).ToList();

            //pedidoViewModel.DetalhePedido = pedidoDetalheViewModel;

            var pedidoViewModel = new PedidoViewModel
            {
                Id = pedido.Id,
                DataRegistro = pedido.DataRegistro.ToString("dd/MM/yyyy"),
                CondicoesEntrega = pedido.CondicoesEntrega,
                CondicoesPagto = pedido.CondicoesPagto,
                Email = pedido.Cliente.Email,
                Telefone = pedido.Cliente.Telefone,
                DiasValidadePreco = pedido.DiasValidadePreco,
                Nome = pedido.Cliente.Nome,


            };

            foreach (var item in pedido.DetalhePedido)
            {
                pedidoViewModel.DetalhePedido.Add(new DetalhePedidoViewModel
                {
                    Id = item.Id,
                    DescricaoProduto = item.DescricaoProduto,
                    Marca = item.Marca,
                    Unidade = item.Unidade,
                    QuantidadeProduto = item.QuantidadeProduto,
                    PercentualIcms = item.PercentualIcms,
                    PercentualIcmsEntrada = item.PercentualIcmsEntrada,
                    PercentualIcmsSaida = item.PercentualIcmsSaida,
                    PercentualIPICompra = item.PercentualIPICompra,
                    PercentualIPIVenda = item.PercentualIPIVenda,
                    ValorComissaoBroker = item.ValorComissaoBroker,
                    ValorDespesasCompra = item.ValorDespesasCompra,
                    ValorPrecoCompra = item.ValorPrecoCompra,
                    ValorPrecoVendaUnitario = item.ValorPrecoVendaUnitario,
                    ValorTotal = item.ValorTotal,
                    ValorUnitario = item.ValorUnitario,
                    ValorUnitarioMinimo = item.ValorUnitarioMinimo,
                    NumeroDiasCondicoesPagamentoCompra = item.NumeroDiasCondicoesPagamentoCompra,
                    NumeroDiasCondicoesPagamentoVenda = item.NumeroDiasCondicoesPagamentoVenda,
                    NumeroDiasPrazoEntrega = item.NumeroDiasPrazoEntrega

                });
            }
            ViewBag.DetalhePedido = pedidoViewModel.DetalhePedido;

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
                dtFinal = DateTime.Parse(dataFinal + " 23:59:00");
            }

            var itens = _pedidoService.ObterDadosPedidos(dtInicial, dtFinal, nomeCliente).Select(x => new
            {
                Pedido = x.Id,
                DataRegistro = x.DataRegistro.ToString("dd/MM/yyyy"),
                x.Cliente.Nome,
                PrecoVendaUnitario = x.DetalhePedido.Sum(y => y.ValorPrecoVendaUnitario * y.QuantidadeProduto).ToString("###.00")
            }).ToList();

            return Json(itens, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ExcluirItemPedido(int id)
        {
            try
            {
                _detalhePedidoService.Remove(id);
                return Json(true, JsonRequestBehavior.AllowGet);

            }
            catch (Exception)
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
        }
    }
}