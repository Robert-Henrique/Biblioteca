using Biblioteca.Models.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Biblioteca.Controllers
{
    public class CidadeController : Controller
    {
        private CidadeBusiness _cidadeBusiness = new CidadeBusiness();

        public JsonResult Obter(int estadoId)
        {
            var cidades = _cidadeBusiness.Obter().Where(c => c.EstadoId.Equals(estadoId)).ToList();
            return Json(cidades, JsonRequestBehavior.AllowGet);
        }

    }
}
