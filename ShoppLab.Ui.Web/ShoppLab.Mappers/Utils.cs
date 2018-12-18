



namespace ShoppLab.Mappers
{
    public static class Utils
    {
        //public static IMappingExpression IgnoreAllNonExisting(this IMappingExpression expression)
        //{
        //    foreach (var property in expression.TypeMap.GetUnmappedPropertyNames())
        //    {
        //        expression.ForMember(property, opt => opt.Ignore());
        //    }
        //    return expression;
        //}

        //public static IMappingExpression IgnoreAllNonExistingSource(this IMappingExpression expression)
        //{
        //    foreach (var property in expression.TypeMap.GetUnmappedPropertyNames())
        //    {
        //        expression.ForSourceMember(property, opt => opt.Ignore());
        //    }
        //    return expression;
        //}

        //public static IMappingExpression<TSource, TDestination> IgnoreAllNonExisting<TSource, TDestination> (this IMappingExpression<TSource, TDestination> expression)
        //{
        //    var flags = BindingFlags.Public | BindingFlags.Instance;
        //    var sourceType = typeof(TSource);
        //    var destinationProperties = typeof(TDestination).GetProperties(flags);

        //    foreach (var property in destinationProperties)
        //    {
        //        if (sourceType.GetProperty(property.Name, flags) == null)
        //        {
        //            expression.ForMember(property.Name, opt => opt.Ignore());
        //        }
        //    }
        //    return expression;
        //}
      
    }
}
