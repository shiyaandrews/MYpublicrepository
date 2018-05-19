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
    public class ProjectTaskController : ApiController
    {
        // GET: api/ProjectTask
        public IEnumerable<ProjectTask> Get()
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.Project_Task.Select(task => task).ToList();
        }

        // GET: api/ProjectTask/5
        public ProjectTask Get(int id)
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.Project_Task.Where(task => task.project_task_id == id).FirstOrDefault();
        }

        // POST: api/ProjectTask
        public void Post(ProjectTask value)
        {
            ProjectTask_Repository taskrepo = new ProjectTask_Repository();
            taskrepo.CreateTask(value);
        }

        // PUT: api/ProjectTask/5
        public void Put(int id, ProjectTask value)
        {
            ProjectTask_Repository taskrepo = new ProjectTask_Repository();
            taskrepo.Edit(value, id);
        }

        // DELETE: api/ProjectTask/5
        public void Delete(int id)
        {
            ProjectTask_Repository taskrepo = new ProjectTask_Repository();
            taskrepo.Delete(id);
        }
    }
}
