using AutoMapper;
using ShoppLab.Domain.Entities;

namespace ShoppLab.Mappers
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        protected override void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<PedidoViewModel, Pedido>();
                cfg.CreateMap<DetalhePedidoViewModel, DetalhePedido>();
                cfg.CreateMap<ClienteViewModel, Cliente>();
            });
        }
    }
}