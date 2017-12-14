Find the leftmost digit that occurs in a given string.

Example

For inputString = "var_1__Int", the output should be
firstDigit(inputString) = '1';
For inputString = "q2q-q", the output should be
firstDigit(inputString) = '2';


function firstDigit(inputString) {
    var num = ["0","1","2","3","4","5","6","7","8","9"];
    for(let i = 0; i < inputString.length; i++){
        if(num.includes(inputString[i], 0)){
            return inputString[i];
        }
    }
}


(Test Cases)
Input:
inputString: "var_1__Int"
Expected Output:
"1"

Input:
inputString: "q2q-q"
Expected Output:
"2"