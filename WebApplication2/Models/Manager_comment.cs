using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Manager_comment
    {
        [Key]
        public int managercomment_id { get; set; }
        public string comments { get; set; }
        public int project_task_id { get; set; }
    }
}