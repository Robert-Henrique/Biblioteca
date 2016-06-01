using Biblioteca.Models;
using Biblioteca.Models.Business;
using Newtonsoft.Json;
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
        public JsonResult Listar(int Id)
        {
            int range = (Id - 1) * 10;
            var livros = _livroBusiness.Obter();
            
            int total = livros.Count;

            return Json(new {
                livros = livros.Skip(range).Take(10),
                totalItens = total
            }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Obter(int? Id)
        {
            var livro = _livroBusiness.Obter().Where(l => l.Id.Equals(Id)).FirstOrDefault();
            return Json(livro, JsonRequestBehavior.AllowGet);
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
