/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
*/

function isLucky(n) {
    n = n.toString()
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < (n.length/2); i++){
        sum1 += parseInt(n[i], 10);
        sum2 += parseInt(n[i+n.length/2], 10);
    }
    return sum1 === sum2;
}
