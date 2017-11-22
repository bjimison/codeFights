Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".


function commonCharacterCount(s1, s2) {
s1 = s1.split("");
s2 = s2.split("");
    
var common1 = {};
var common2 = {};
    for(var i = 0; i < s1.length; i++){
        if(common1.hasOwnProperty(s1[i]) === false){
           common1[s1[i]] = 1;
           }
        else{
            common1[s1[i]]++;
        }
    }
    for(var i = 0; i < s2.length; i++){
        if(common2.hasOwnProperty(s2[i]) === false){
           common2[s2[i]] = 1;
           }
        else{
            common2[s2[i]]++;
        }
    } 
    var total = 0;
    for(var el in common1){
        if(common2.hasOwnProperty(el) === true){
            if(common2[el] < common1[el]){
                total += common2[el];
            } 
            else{
                total += common1[el];
            }
        } 
    }
           return total; 
}

(Test cases)s1: "aabcc"
            s2: "adcaa"
