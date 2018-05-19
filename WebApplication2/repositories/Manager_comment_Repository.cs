using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication2.common;
using WebApplication2.Models;

namespace WebApplication2.repositories
{
    public class Manager_comment_Repository
    {
        
        public void CreateComment(Manager_comment comment)
        {
            MainDbContext mdb = new MainDbContext();
            mdb.Manager_comments.Add(comment);
            mdb.SaveChanges();
        }

        public List<Manager_comment> ShowAllComments()
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.Manager_comments.Select(com => com).ToList();
        }
        


           
        public Manager_comment SearchById(int id, MainDbContext mdb)
        {
            return (mdb.Manager_comments.Select(com => com).Where(com => com.managercomment_id == id)).First();
        }
        
        public void Delete(int id)
        {
            MainDbContext mdb = new MainDbContext();
            Manager_comment mn = SearchById(id, mdb);
            mdb.Manager_comments.Remove(mn);
            mdb.SaveChanges();
        }

        public void Edit(Manager_comment m, int id)
        {
            MainDbContext mdb = new MainDbContext();
            Manager_comment man = SearchById(id, mdb);
            man.comments = m.comments;
            man.project_task_id = m.project_task_id;
            mdb.SaveChanges();
        }
    }
}


    

    

    

    

    