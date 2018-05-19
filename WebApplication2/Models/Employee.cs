using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Employee
    {
        [Key]
        
        public int employee_id { get; set; }
        [Required]
        public string employee_name { get; set; }
        [Required]
        public string deignation { get; set; }
        
        public int? manager_id { get; set; }
        [ForeignKey("manager_id")]
        [System.Runtime.Serialization.IgnoreDataMember]
        public Employee manager { get; set; }
        [Required]
        public string contact_no { get; set; }
        [Required]        
        public string email_id { get; set; }
        [Required]
        public string skillsets { get; set; }
        

    }
}

