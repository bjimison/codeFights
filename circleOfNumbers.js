Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

function circleOfNumbers(n, firstNumber) {
let half = n/2;
let result = firstNumber + half;
    if(result > (n-1)){
        result = result - n;
    }
    return result;
}


(Test Cases)
n: 10
firstNumber: 2

n: 4
firstNumber: 1