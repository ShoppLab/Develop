using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ShoppLab.Ui.Web.ViewModel
{
    public class ClienteViewModel
    {
        [Description("Identificação do cliente")]
        [Display(Name = "Id")]
        public int Id { get; set; }

        [Description("Nome do cliente")]
        [Display(Name = "Nome")]
        public string Nome { get; set; }

        [Description("Data de registro do cliente")]
        [Display(Name = "Data de registro")]
        public DateTime DataRegistro { get; set; }

        [Description("Email do cliente")]
        [Display(Name = "E-mail")]
        public string Email { get; set; }

        [Description("Telefone do cliente")]
        [Display(Name = "Telefone")]
        public string Telefone { get; set; }
    }
}