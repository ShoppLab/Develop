using Angle;
using ServiceLocation;
using ShoppLab.IoC;
using ShoppLab.IoC.App_Start;
using ShoppLab.Mappers;
using SimpleInjector.Integration.Web.Mvc;
using System.Globalization;
using System.Threading;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace ShoppLab.Ui.Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            AutoMapperConfig.RegisterMappings();

            SimpleInjectorInitializer.Initializer();
            ServiceLocator.SetLocatorProvider(() => new SimpleInjectorServiceLocatorAdapter(SimpleInjectorInitializer.Container));
            DependencyResolver.SetResolver(new SimpleInjectorDependencyResolver(SimpleInjectorInitializer.Container));

            Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture("pt-BR");

        }
    }
}
