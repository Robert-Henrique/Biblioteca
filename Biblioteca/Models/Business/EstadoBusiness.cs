using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Biblioteca.Models.Business
{
    public class EstadoBusiness
    {
        private BibliotecaEntities bd = new BibliotecaEntities();

        public IQueryable<Estado> Obter()
        {
            return bd.Estado;
        }
    }
}