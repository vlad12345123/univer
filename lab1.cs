﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {

        static void Main(string[] args)
        {
            A a = new A();
            Console.WriteLine("Значение поля c = " + a.c);
        }
    }

    class A
    {

        private float a = 10;
        private float b = 10;
        public float c
        {
            get { return a %= b; }
        }

        public A()
        {

        }
    }
}
