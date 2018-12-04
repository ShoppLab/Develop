using AutoMapper;
using ShoppLab.Domain.Entities;
using ShoppLab.Ui.Web.ViewModel;

namespace ShoppLab.Ui.Web.Mappers
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            Mapper.Initialize(cfg => cfg.CreateMap<Pedido, PedidoViewModel>());
        }
    }
}