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
            A a = new A();
            Console.WriteLine("Введите y или n\n");
            a.query = Convert.ToChar(Console.ReadLine());
            Console.WriteLine("Значение поля c = " + a.c);
        }
    }

    class A
    {
        private float a = 10;
        private float b = 10;

        public char query;

        public float c
        {
            get
            {
                if (query == 'y')
                {
                    return a %= b;
                }
                else
                {
                    return a + b;
                }
            }
        }

        public A()
        {

        }
    }
}
