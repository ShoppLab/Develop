using ShoppLab.Domain.Interfaces;
using ShoppLab.Repository.Dapper.Repository;
using ShoppLab.Service;
using SimpleInjector;

namespace ShoppLab.IoC.App_Start
{
    public class SimpleInjectorInitializer
    {
        public static Container Container { get; set; }

        public static void Initializer()
        {
            Container = new Container();
            //var lifeStyle = Lifestyle.Singleton;
            InitializerContainer(Container);
        }

        private static void InitializerContainer(Container container)
        {
            #region Repository
            //container.Register(typeof(IServiceBase<>), typeof(ServiceBase<>));
            //container.Register<IClienteRepository, ClienteRepository>();
            //container.Register<IContatoRepository, ContatoRepository>();
            //container.Register<IEmailRepository, EmailRepository>();
            container.Register<IPedidoRepository, PedidoRepository>();
            container.Register<IDetalhePedidoRepository, DetalhePedidoRepository>();
            container.Register<IUsuarioRepository, UsuarioRepository>();


            #endregion

            #region Services
            //Container.Register<IClienteService, ClienteService>();
            //Container.Register<IContatoService, ContatoService>();
            //Container.Register<IEmailService, EmailService>();
            Container.Register<IPedidoService, PedidoService>();
            Container.Register<IDetalhePedidoService, DetalhePedidoService>();
            Container.Register<IUsuarioService, UsuarioService>();


            #endregion

            #region Config
           
            #endregion
        }
    }
}
