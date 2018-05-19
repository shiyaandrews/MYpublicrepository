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
    public class ProjectController : ApiController
    {
        // GET: api/Project
        public IEnumerable<Project> Get()
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.Projects.Select(pro => pro).ToList();
        }
              

        // GET: api/Project/5
        public Project Get(int id)
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.Projects.Where(pro => pro.project_id == id).FirstOrDefault();
        }
        
       
        // POST: api/Project
        public void Post(Project value)
        {
            Project_Repository prorepo = new Project_Repository();
            prorepo.CreateProject(value);
            
        }
        // PUT: api/Project/5
        public void Put(int id, Project value)
        {
            Project_Repository prorepo = new Project_Repository();
            prorepo.Edit(value, id);
        }

        // DELETE: api/Project/5
        public void Delete(int id)
        {
            Project_Repository prorepo = new Project_Repository();
            prorepo.Delete(id);
        }
        
            
    }
}










