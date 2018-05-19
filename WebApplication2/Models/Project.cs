using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Project
    {
        [Key]
        
        public int project_id { get; set; }
        [Required]
        public string project_name { get; set; }
        [Required]
        public DateTime start_date { get; set; }
        [Required]
        public DateTime end_date { get; set; }
        [Required]
        public string client_name { get; set; }
    }
}