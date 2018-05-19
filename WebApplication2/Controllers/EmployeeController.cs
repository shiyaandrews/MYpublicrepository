using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.Models;
using WebApplication2.common;
using WebApplication2.repositories;

namespace WebApplication2.Controllers
{
    public class EmployeeController : ApiController
    {
        // GET: api/Employee

        public IEnumerable<Employee> Get()
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.Employees.Select(emp => emp).ToList();
                        
        }

        // GET: api/Employee/5
        public Employee Get(int id)
        {
            MainDbContext mdb = new MainDbContext();
            return mdb.Employees.Where(emp => emp.employee_id == id).FirstOrDefault();
            
            
        }

        // POST: api/Employee
        public void Post(Employee value)
        {
            MainDbContext mdb = new MainDbContext();
            mdb.Employees.Add(value);
            mdb.SaveChanges();
                       
        }

        // PUT: api/Employee/5
        public void Put(int id, Employee value)
        {
            MainDbContext mdb = new MainDbContext();
            //var existingEmp = mdb.Employees.Where(emp => emp.employee_id == id).FirstOrDefault();
            //if (existingEmp != null)
            //{
            //    existingEmp.employee_name = value.employee_name;
            //    existingEmp.deignation = value.deignation;
            //    existingEmp.manager_id = value.manager_id;
            //    existingEmp.contact_no = value.contact_no;
            //    existingEmp.email_id = value.email_id;
            //    existingEmp.skillsets = value.skillsets;

            //}
            //mdb.SaveChanges();
            Employee_Repository emprepo = new Employee_Repository();
            emprepo.Edit(value, id);
        }
    

        // DELETE: api/Employee/5
        public void Delete(int id)
        {
            //MainDbContext mdb = new MainDbContext();
            
            //Employee e = new Employee();
            //Employee emp = mdb.Employees.Where(em => em.employee_id == e.employee_id).FirstOrDefault();
            //mdb.Employees.Remove(emp);
            //mdb.SaveChanges();
            Employee_Repository emprepo = new Employee_Repository();
            emprepo.Delete(id);

        }            

       
    }
}
