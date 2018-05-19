using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApplication2.Models;

namespace WebApplication2.common
{
    public class MainDbContext : DbContext
    {
        public MainDbContext() : base("Data Source = DESKTOP-A47KB97\\SQLEXPRESS;Initial Catalog =Angular6; Integrated Security = True")
        {

            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;

        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<User_Stories> UserStories { get; set; }
        public DbSet<Manager_comment> Manager_comments { get; set; }
        public DbSet<ProjectTask> Project_Task { get; set; }
        


    }
}