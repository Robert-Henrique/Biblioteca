using Biblioteca.Models;
using Biblioteca.Models.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Biblioteca.Controllers
{
    public class LivroController : Controller
    {
        private LivroBusiness _livroBusiness = new LivroBusiness();

        [HttpGet]
        public JsonResult Obter(int? Id)
        {
            if (Id != null)
            {
                int _Id = Convert.ToInt32(Id);
                var livro = _livroBusiness.Obter().Where(l => l.Id.Equals(_Id)).FirstOrDefault();
                return Json(livro, JsonRequestBehavior.AllowGet);
            }

            return Json(_livroBusiness.Obter(), JsonRequestBehavior.AllowGet); 
        }

        [HttpPost]
        public JsonResult Salvar(Livro _Livro)
        {
            return Json(_livroBusiness.Salvar(_Livro), JsonRequestBehavior.AllowGet);
        }
       
        public JsonResult Excluir(Livro _Livro)
        {
            if (_livroBusiness.Excluir(_Livro))
                return Json(true, JsonRequestBehavior.AllowGet);

            return Json(false, JsonRequestBehavior.AllowGet);
        }
    }
}
