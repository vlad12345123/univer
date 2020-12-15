using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lab6_1
{
    class Program
    {

        static void Main(string[] args)
        {
            Man man1 = new Man { Surname = "Катя", BirthYear = 1996, Status = "Серьеезный дядя" };
            Man man2 = new Man { Surname = "Вадик", BirthYear = 2003, Status = "Лох" };
            Man man3 = new Man { Surname = "Кирилл", BirthYear = 1994, Status = "Шрек" };


            List<Man> mans = new List<Man>();
            mans.Add(man1);
            mans.Add(man2);
            mans.Add(man3);
            mans.Sort();

            foreach (Man m in mans)
            {
                Console.WriteLine($"{m.BirthYear} - {m.Surname} - {m.Status}");
            }
        }
    }
}
