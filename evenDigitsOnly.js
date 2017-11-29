Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.


function evenDigitsOnly(n) {
// split n into an array
// iterate using for loop checking each value of the new array
var arr = n.toString().split("");
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            return false;
        }
    }
    return true; 
}


(Test Cases)
n: 642386
n: 468402800