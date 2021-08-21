/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray) {
    let tmpMax = 0;
    let previousMax = inputArray[0]*inputArray[1];
    for (let i = 1; i < inputArray.length; i++){
        tmpMax = inputArray[i]*inputArray[i+1];
        if (tmpMax > previousMax){
            previousMax = tmpMax;
        }
    }
    return previousMax;
}

