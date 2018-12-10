using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ShoppLab.Ui.Web.ViewModel
{
    public class PedidoViewModel
    {
        //[Required(ErrorMessage = "xxxx")]
        //[Display(Name = "Id")]
        //public int Id { get; set; }

        [Required(ErrorMessage = "xxxx")]
        [Description("Nome do cliente")]
        [Display(Name = "Nome")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "xxxxx")]
        [Display(Name = "Data de registro")]
        public string DataRegistro { get; set; }

        [Description("Email do cliente")]
        [Display(Name = "E-mail")]
        public string Email { get; set; }

        [Description("Telefone do cliente")]
        [Display(Name = "Telefone")]
        public string Telefone { get; set; }

    }
}