/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function commonCharacterCount(s1, s2) {
    let l1 = s1.length;
    let l2 = s2.length;
    let len = 0;
    let str1 = "";
    let str2 = "";
    if (l1 >= l2){
        len = l1;
        str1 = s1;
        str2 = s2;
    }
    else{
        len = l2;
        str1 = s2;
        str2 = s1;
    }
    let count = 0;
    for (let i = 0; i < len; i++){
        if (str1[i] != '_'){
            var re = new RegExp(str1[i], 'g');
            count += Math.min((str1.match(re)|| []).length, (str2.match(re)|| []).length);
            str1 = str1.replace(re, '_');
            console.log(count, str1, str2);
        }
    }
    return count;
}
