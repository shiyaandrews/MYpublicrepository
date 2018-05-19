using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication2.common;
using WebApplication2.Models;

namespace WebApplication2.repositories
{
    public class ProjectTask_Repository
    {
        public List<ProjectTask> ShowAllTasks()
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.Project_Task.Select(task => task).ToList();
        }

        public void CreateTask(ProjectTask t)
        {
            MainDbContext mdb = new MainDbContext();
            mdb.Project_Task.Add(t);
            mdb.SaveChanges();
        }

        public void Edit(ProjectTask t, int id)
        {
            MainDbContext mdb = new MainDbContext();
            ProjectTask ta = SearchById(id, mdb);
            ta.assigned_to = t.assigned_to;
            ta.task_end_date = t.task_end_date;
            ta.task_start_date = t.task_start_date;
            ta.task_completion = t.task_completion;
            ta.user_story_id = t.user_story_id;
            mdb.SaveChanges();
        }

        public ProjectTask SearchById(int id, MainDbContext mdb)
        {
            return (mdb.Project_Task.Select(t => t).Where(t => t.project_task_id == id)).First();
        }

        public void Delete(int id)
        {
            MainDbContext mdb = new MainDbContext();
            ProjectTask tk = SearchById(id, mdb);
            mdb.Project_Task.Remove(tk);
            mdb.SaveChanges();
        }
    }
}