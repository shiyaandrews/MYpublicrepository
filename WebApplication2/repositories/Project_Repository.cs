using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication2.common;
using WebApplication2.Models;

namespace WebApplication2.repositories
{
    public class Project_Repository
    {
        public void CreateProject(Project p)
        {
            MainDbContext mdb = new MainDbContext();
            mdb.Projects.Add(p);
            mdb.SaveChanges();
        }
        

        public List<Project> GetAllProjects()
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.Projects.Select(pro => pro).ToList();
        }
        
                   
        public Project SearchById(int id, MainDbContext mdb)
        {
            return (mdb.Projects.Select(pro => pro).Where(pro => pro.project_id == id)).First();
        }
        public void Delete(int id)
        {
            MainDbContext mdb = new MainDbContext();
            Project pr = SearchById(id, mdb);
            mdb.Projects.Remove(pr);
            mdb.SaveChanges();
        }

        public void Edit(Project p, int id)
        {
            MainDbContext mdb = new MainDbContext();
            Project pr = SearchById(id, mdb);
            pr.project_name = p.project_name;
            pr.start_date = p.start_date;
            pr.end_date = p.end_date;
            pr.client_name = p.client_name;
            mdb.SaveChanges();
        }

        
    }
}










