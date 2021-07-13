using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace internship_api.Controllers
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string Position { get; set; }
        public decimal Salary { get; set; }
        public int YearOfAppointment { get; set; }
        public int TotalHolidays { get; set; }
        public int UsedHolidays { get; set; }
    }
}
