using AutoMapper;
using ShoppLab.Domain.Entities;
using ShoppLab.Ui.Web.ViewModel;

namespace ShoppLab.Ui.Web.Mappers
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            Mapper.Initialize(cfg => cfg.CreateMap<PedidoViewModel, Pedido>());
        } 
    }
}