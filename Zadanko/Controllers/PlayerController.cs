using sports;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Zadanko.Controllers
{
    public class PlayerController : ApiController
    {
        // GET: api/Player
        public IEnumerable<int> Get()
        {
            return PlayersStore.GetPlayerNumbers();
        }

        // GET: api/Player/5
        public Player Get(int id)
        {
            return PlayersStore.GetPlayer(id);
        }

        // POST: api/Player
        public void Post([FromBody]Player value)
        {
            PlayersStore.AddPlayer(value);
        }

        // PUT: api/Player/5
        public void Put(int id, [FromBody]Player value)
        {
            PlayersStore.AddPlayer(value);
        }

        // DELETE: api/Player/5
        public void Delete(int id)
        {
            PlayersStore.RemovePlayer(id);
        }
    }
}
