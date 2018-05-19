namespace WebApplication2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class new3 : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Employees", new[] { "manager_id" });
            AlterColumn("dbo.Employees", "manager_id", c => c.Int());
            CreateIndex("dbo.Employees", "manager_id");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Employees", new[] { "manager_id" });
            AlterColumn("dbo.Employees", "manager_id", c => c.Int(nullable: false));
            CreateIndex("dbo.Employees", "manager_id");
        }
    }
}
