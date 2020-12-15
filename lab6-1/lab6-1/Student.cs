using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lab6_1
{
    class Student : Man
    {
        public int Math { get; set; }
        public int Physics { get; set; }
        public int History { get; set; }


        public Student(int Math, int Physics, int History)
        {
            this.Math = Math;
            this.Physics = Physics;
            this.History = History;
        }
        public int Average()
        {
            return (Math + Physics + History) / 3;
        }

        public override int Info()
        {
            int[] arr = { Math, Physics, History };
            return arr.Max();
        }
    }
}
