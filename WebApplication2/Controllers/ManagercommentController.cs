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
    public class ManagercommentController : ApiController
    {
        // GET: api/Managercomment
        public IEnumerable<Manager_comment> Get()
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.Manager_comments.Select(com => com).ToList();
        }
        // GET: api/Managercomment/5
        public Manager_comment Get(int id)
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.Manager_comments.Where(com => com.managercomment_id == id).FirstOrDefault();
        }

        // POST: api/Managercomment
        public void Post(Manager_comment value)
        {
            Manager_comment_Repository manrepo = new Manager_comment_Repository();
            manrepo.CreateComment(value);
        }
        // PUT: api/Managercomment/5
        public void Put(int id, Manager_comment value)
        {
            Manager_comment_Repository manrepo = new Manager_comment_Repository();
            manrepo.Edit(value, id);
        }



        // DELETE: api/Managercomment/5
        public void Delete(int id)
        {
            Manager_comment_Repository manrepo = new Manager_comment_Repository();
            manrepo.Delete(id);
        }



       
    }
}









