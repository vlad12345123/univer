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
            B b = new B();
            for (int i = 0; i < 10; i++)
                Console.Write("{0} ", b[i]);

            Console.WriteLine();

            for (int i = 0; i < 10; i++)
                Console.Write("{0} \n", b[(short)i]);


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
        int[] arr1;
        int[] arr2 = new int[] { 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 };

        public B()
        {
            arr1 = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        }

        public int this[int index]
        {
            set { arr1[index] = value; }
            get { return arr1[index]; }
        }

        public int this[short index2]
        {
            set { arr2[index2] = value; }
            get { return arr2[index2]; }
        }
    }
}
