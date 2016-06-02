using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Biblioteca.Models.Business
{
    public class ClienteBusiness
    {
        private BibliotecaEntities bd = new BibliotecaEntities();

        public IQueryable<Cliente> Obter()
        {
            return bd.Cliente;
        }

        public Cliente Obter(int _id)
        {
            return bd.Cliente.Find(_id);
        }

        public Cliente Salvar(Cliente _Cliente)
        {
            try
            {
                if (_Cliente.Id == 0)
                    bd.Cliente.Add(_Cliente);
                else
                    bd.Entry(_Cliente).State = EntityState.Modified;

                bd.SaveChanges();
                return _Cliente;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public bool Excluir(Cliente _Cliente)
        {
            try
            {
                Cliente l = Obter(_Cliente.Id);
                bd.Cliente.Remove(l);
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