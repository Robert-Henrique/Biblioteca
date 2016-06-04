using Biblioteca.Models;
using Biblioteca.Models.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Biblioteca.Controllers
{
    public class ClienteController : Controller
    {
        private ClienteBusiness _clienteBusiness = new ClienteBusiness();

        [HttpGet]
        public JsonResult Listar(int range, string filtro)
        {
            range = (range - 1) * 10;
            var clientes = _clienteBusiness.Obter().Where(l => string.IsNullOrEmpty(filtro) || l.Nome.Contains(filtro)
                                                                                            || l.CPF.Contains(filtro)
                                                                                            || l.Email.Contains(filtro)
                                                                                            || l.Cidade.Nome.Contains(filtro));

            int total = clientes.Count();

            return Json(new
            {
                clientes = clientes.OrderBy(l => l.Id).Skip(range).Take(10).ToList().Select(c => new
                {
                    Id = c.Id,
                    Nome = c.Nome,
                    CPF = c.CPF,
                    DataNascimento = c.DataNascimento.ToShortDateString(),
                    Sexo = c.Sexo,
                    Telefone = c.Telefone,
                    Email = c.Email,
                    Cidade = c.Cidade.Nome
                }),
                totalItens = total,
                numPages = Math.Ceiling(Convert.ToDecimal(total) / 10)
            }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Obter(int? Id)
        {
            var cliente = _clienteBusiness.Obter(Convert.ToInt32(Id));
            return Json(new
            {
                Id = cliente.Id,
                Nome = cliente.Nome,
                CPF = cliente.CPF,
                DataNascimento = cliente.DataNascimento.ToShortDateString(),
                Sexo = cliente.Sexo,
                Telefone = cliente.Telefone,
                Email = cliente.Email,
                Cidade = cliente.Cidade.Nome
            }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Salvar(Cliente cliente)
        {
            return Json(_clienteBusiness.Salvar(cliente), JsonRequestBehavior.AllowGet);
        }

        public JsonResult Excluir(Cliente cliente)
        {
            if (_clienteBusiness.Excluir(cliente))
                return Json(true, JsonRequestBehavior.AllowGet);

            return Json(false, JsonRequestBehavior.AllowGet);
        }
    }
}
