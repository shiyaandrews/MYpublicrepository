using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class ProjectTask
    {
        [Key]

        public int project_task_id { get; set; }
        [Required]
        public int assigned_to { get; set; }
        [ForeignKey("assigned_to")]
        public Employee employee { get; set; }
        [Required]
        public DateTime task_end_date { get; set; }
        [Required]
        public DateTime task_start_date { get; set; }
        [Required]
        public DateTime task_completion { get; set; }
        [Required]
        public int user_story_id { get; set; }
        [ForeignKey("user_story_id")]
        public User_Stories Userstories { get; set; }
    }
}