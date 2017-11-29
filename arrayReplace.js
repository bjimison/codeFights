Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example

For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be
arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].


function arrayReplace(inputArray, elemToReplace, substitutionElem) {
// for loop replacing elemtoreplace with subelem
    for(i = 0; i < inputArray.length; i++){
        if(inputArray[i] === elemToReplace){
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}


(Test Cases)
inputArray: [1, 2, 1]
elemToReplace: 1
substitutionElem: 3

inputArray: [1, 2, 3, 4, 5]
elemToReplace: 3
substitutionElem: 0