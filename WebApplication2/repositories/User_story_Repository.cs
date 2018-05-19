using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication2.common;
using WebApplication2.Models;

namespace WebApplication2.repositories
{
    public class User_story_Repository
    {
        public List<User_Stories> ShowAllUserStories()
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.UserStories.Select(user => user).ToList();
        }

        public void CreateUstories(User_Stories user)
        {
            MainDbContext mdb = new MainDbContext();
            mdb.UserStories.Add(user);
            mdb.SaveChanges();
        }

        public void Edit(User_Stories ua, int id)
        {
            MainDbContext mdb = new MainDbContext();
            User_Stories us = SearchById(id, mdb);
            us.story = ua.story;
            us.project_id = ua.project_id;
            mdb.SaveChanges();
        }

        public User_Stories SearchById(int id, MainDbContext mdb)
        {
            return (mdb.UserStories.Select(use => use).Where(use => use.user_story_id == id)).First();
        }

        public void Delete(int id)
        {
            MainDbContext mdb = new MainDbContext();
            User_Stories us = SearchById(id, mdb);
            mdb.UserStories.Remove(us);
            mdb.SaveChanges();
        }
    }
}
