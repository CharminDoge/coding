/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/

function allLongestStrings(inputArray) {
    let maxx = 1;
    let newmax = 1;
    for (let i = 0; i < inputArray.length; i++){
        newmax = inputArray[i].length;
        if (newmax > maxx){
            maxx = newmax;
        }
    }
    let myarr = [];
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i].length === maxx){
           myarr.push(inputArray[i]);
        }
    }
    return myarr;
}
