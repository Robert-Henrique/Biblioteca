using System.Linq;

namespace Biblioteca.Models.Business
{
    public class CidadeBusiness
    {
        private BibliotecaEntities bd = new BibliotecaEntities();

        public IQueryable<Cidade> Obter()
        {
            return bd.Cidade;
        }
    }
}
