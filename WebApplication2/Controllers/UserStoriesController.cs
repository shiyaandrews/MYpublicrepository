using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.common;
using WebApplication2.Models;
using WebApplication2.repositories;

namespace WebApplication2.Controllers
{
    public class UserStoriesController : ApiController
    {
        // GET: api/UserStories
        public IEnumerable<User_Stories> Get()
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.UserStories.Select(usto => usto).ToList();
        }
        

        // GET: api/UserStories/5
        public User_Stories Get(int id)
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.UserStories.Where(user => user.user_story_id == id).FirstOrDefault();
        }

        // POST: api/UserStories
        public void Post(User_Stories value)
        {
            User_story_Repository userepo = new User_story_Repository();
            userepo.CreateUstories(value);
        }

        



        // PUT: api/UserStories/5
        public void Put(int id, User_Stories value)
        {
            User_story_Repository userepo = new User_story_Repository();
            userepo.Edit(value, id);
        }

        // DELETE: api/UserStories/5
        public void Delete(int id)
        {
            User_story_Repository userepo = new User_story_Repository();
            userepo.Delete(id);
        }
    }
}











