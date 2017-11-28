Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {
var diff = Math.abs(inputArray[0] - inputArray[1]);
    for(var i = 1; i < inputArray.length; i++){
        diff2 = Math.abs(inputArray[i] - inputArray[i+1]);
        diff = (diff2 > diff) ? diff2 : diff;
    }
    return diff;
}


(Testcases)
inputArray: [2, 4, 1, 0]
inputArray: [-1, 4, 10, 3, -2]