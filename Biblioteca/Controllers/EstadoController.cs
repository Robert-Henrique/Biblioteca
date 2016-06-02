using Biblioteca.Models.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Biblioteca.Controllers
{
    public class EstadoController : Controller
    {
        private EstadoBusiness _estadoBusiness = new EstadoBusiness();

        public JsonResult Obter()
        {
            var estados = _estadoBusiness.Obter().ToList();
            return Json(estados, JsonRequestBehavior.AllowGet);
        }
    }
}
