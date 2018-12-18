using AutoMapper;
using ShoppLab.Domain.Entities;

namespace ShoppLab.Mappers
{
    public class DomainToViewModelMappingProfile : Profile
    {
        protected override void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Pedido, PedidoViewModel>();
                cfg.CreateMap<DetalhePedido, DetalhePedidoViewModel>();
                cfg.CreateMap<Cliente, ClienteViewModel>();
            });
        }
    }
}