function arrayChange(inputArray) {
// if inputArray[i] < inputArray[i + 1]
// inputArray[i] = inputArray[i] + 1 
// count += 1 
// return count 
var count = 0 
    for(var i = 0; i < inputArray.length - 1; i++){
        if(inputArray[i] >= inputArray[i + 1]){
            count += (inputArray[i] - inputArray[i + 1]) + 1;
            inputArray[i+1] = inputArray[i] + 1;
        }
         else if(inputArray[i] == inputArray[i+1]){
            count += 1; 
        }
    }
    return count;
}

