/*
	Write a program that prints the numbers from 1 to 100.
	But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz".
	For numbers which are multiples of both three and five, print "FizzBuzz".

	I have started this below, lets try and fix it

	Remember % is used to return the remainder of dividing the two operands.	
*/
for (var i=1; i < 20; i++)
{
	//Check if multiple of 3 & 5
    if (i % 15 == 0)
        console("FizzBuzz");
    else if i % 3 == 0) //Check if multiple of 3
        console.log("Buzz");
    else if (i % 5 == 0) //Check if multiple of 5
        console("Fizz"");
    else
        console.log(i);
}