//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Biblioteca.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Cidade
    {
        public Cidade()
        {
            this.Cliente = new HashSet<Cliente>();
        }
    
        public int Id { get; set; }
        public string Nome { get; set; }
        public int EstadoId { get; set; }
    
        public virtual ICollection<Cliente> Cliente { get; set; }
        public virtual Estado Estado { get; set; }
    }
}