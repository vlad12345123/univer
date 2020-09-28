using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lab4
{
    class Program
    {
        static void Main(string[] args)
        {
            var classB = new B();
            for (int i = 0; i < 10; i++)
                Console.Write("{0} ", classB[i]);

            Console.WriteLine();
            for (int i = 0; i < 10; i++)
                Console.Write("{0} \n", classB[(short)i]);


            C<string>.F = "строка";
            C<int>.F = 10;
            Console.WriteLine("{0} {1}", C<string>.F, C<int>.F);

            Console.ReadKey();
        }
    }

    class C<T>
    {
        static public T F;
    }

    class B
    {
        int[] m1;
        int[] m2 = new int[] { 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 };

        public B()
        {
            m1 = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        }

        public int this[int index]
        {
            set { m1[index] = value; }
            get { return m1[index]; }
        }

        public int this[short index2]
        {
            set { m2[index2] = value; }
            get { return m2[index2]; }
        }
    }
}
