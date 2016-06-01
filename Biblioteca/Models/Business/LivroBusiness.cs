using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Biblioteca.Models.Business
{
    public class LivroBusiness
    {
        private BibliotecaEntities bd = new BibliotecaEntities();

        public List<Livro> Obter()
        {
            return bd.Livro.ToList();
        }

        public IQueryable<Livro> Obter2()
        {
            return bd.Livro;
        }

        public Livro Obter(int _id)
        {
            return bd.Livro.Find(_id);
        }

        public Livro Salvar(Livro _Livro)
        {
            try
            {
                if (_Livro.Id == 0)
                    bd.Livro.Add(_Livro);
                else
                    bd.Entry(_Livro).State = EntityState.Modified;
               
                bd.SaveChanges();
                return _Livro;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public bool Excluir(Livro _Livro)
        {
            try
            {
                Livro l = Obter(_Livro.Id);
                bd.Livro.Remove(l);
                bd.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}


