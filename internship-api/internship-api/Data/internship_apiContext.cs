using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using internship_api.Controllers;

namespace internship_api.Data
{
    public class internship_apiContext : DbContext
    {
        public internship_apiContext (DbContextOptions<internship_apiContext> options)
            : base(options)
        {
        }

        public DbSet<internship_api.Controllers.Employee> Employee { get; set; }
    }
}
