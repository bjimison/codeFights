Given a string, find the number of different characters in it.

Example

For s = "cabca", the output should be
differentSymbolsNaive(s) = 3.

There are 3 different characters a, b and c.

function differentSymbolsNaive(s) {
// create new array and push each unique char into it
// return array.length

var uniq = [];
    for(var i = 0; i < s.length; i++){
     if(uniq.indexOf(s.charAt(i)) == -1){
      uniq += s[i]
     }
    }
 return uniq.length;
}



(Test Cases)
Input:
s: "cabca"
Expected Output:
3

Input:
s: "aba"
Expected Output:
2
