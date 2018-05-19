using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class User_Stories
    {
        [Key]
        
        public int user_story_id { get; set; }
        [Required]
        public string story { get; set; }
        [Required]
        public int project_id { get; set; }
        [ForeignKey("project_id")]
        public Project proid { get; set; }
        
    }
}