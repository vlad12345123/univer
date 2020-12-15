using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lab6_1
{
    class Man : IComparable
    {
        public string Surname { get; set; }
        public int BirthYear { get; set; }
        public string Status { get; set; }

        public Man(string Surname, DateTime Birthday, string Status)
        {
            this.Surname = Surname;
            this.BirthYear = BirthYear;
            this.Status = Status;
        }

        public Man()
        {

        }

        public virtual int Info()
        {
            return BirthYear;
        }

        public int CompareTo(object obj)
        {
            Man p = obj as Man;
            if (p != null)
                return this.BirthYear.CompareTo(p.BirthYear);
            else
                throw new Exception("Экспешн");
        }
    }
}
