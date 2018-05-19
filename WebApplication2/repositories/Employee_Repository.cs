using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication2.common;
using WebApplication2.Models;

namespace WebApplication2.repositories
{
    public class Employee_Repository
    {

        public void CreateEmployee(Employee e)
        {
            MainDbContext mdb = new MainDbContext();
            mdb.Employees.Add(e);
            mdb.SaveChanges();
        }       

        public List<Employee> GetAllEmployees()
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.Employees.Select(emp => emp).ToList();            
        }
        

        public Employee SearchById(int id, MainDbContext mdb)
        {
            return (mdb.Employees.Select(emp => emp).Where(emp => emp.employee_id == id)).First();
        }
        public void Delete(int id)
        {
            MainDbContext mdb = new MainDbContext();
            Employee em = SearchById(id, mdb);
            mdb.Employees.Remove(em);
            mdb.SaveChanges();
        }

        public void Edit(Employee e, int id)
        {
            MainDbContext mdb = new MainDbContext();
            Employee emp = SearchById(id, mdb);
            emp.employee_name = e.employee_name;
            emp.deignation = e.deignation;
            emp.manager_id = e.manager_id;
            emp.contact_no = e.contact_no;
            emp.email_id = e.email_id;
            emp.skillsets = e.skillsets;
            mdb.SaveChanges();
        }
    }
}

    
       

    

    

   

   