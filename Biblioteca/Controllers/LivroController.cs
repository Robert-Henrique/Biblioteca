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
        public JsonResult Listar(int range, string filtro)
        {
            range = (range - 1) * 10;
            var livros = _livroBusiness.Obter().Where(l => string.IsNullOrEmpty(filtro) || l.Titulo.Contains(filtro));

            int total = livros.Count();

            return Json(new {
                livros = livros.OrderBy(l => l.Id).Skip(range).Take(10),
                totalItens = total,
                numPages = Math.Ceiling(Convert.ToDecimal(total) / 10)
            }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Obter(int? Id)
        {
            var livro = _livroBusiness.Obter(Convert.ToInt32(Id));
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
