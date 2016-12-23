//=========================================================================
//Write a program that will calculate the number of trailing zeros in a factorial of a given number.

//N! = 1 * 2 * 3 * 4 ... N

//zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600 
//that has 2 trailing zeros 4790016(00)
//Be careful 1000! has length of 2568 digital numbers.
//=========================================================================

function zeros (n) {
  var count =0;
  for (var i=5; (n/i)>=1; i *= 5)
          count += n/i;
  return count-count%1; 
}