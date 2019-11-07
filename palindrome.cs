using System;

namespace palindrome
{
    class Program
    {
        static void Main(string[] args)
        {
            string s, revs = "";
            // user instructed to enter a string
            Console.WriteLine("Please Enter Word");
            s = Console.ReadLine();
            // this is where we reverse the string
            for (int i = s.Length - 1; i >= 0; i--)  
            {
                revs += s[i].ToString();
            }
            // Checking whether the string is palindrome or not  
            if (revs == s) 
            {
            // print appropriate statements    
                Console.WriteLine("String is Palindrome \n Entered String Was {0} and reverse string is {1}", s, revs);
            }
            else
            {
                Console.WriteLine("String is not Palindrome \n Entered String Was {0} and reverse string is {1}", s, revs);
            }
            // console.ReadKey is a method that makes the program wait for a key press from the user
            Console.ReadKey();
        }
    }
}
