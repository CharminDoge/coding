/*
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
reverseInParentheses(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
reverseInParentheses(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
*/

function reverse(A,l,h){
    if (l < h){
    let ch = A[l];
    A[l] = A[h];
    A[h] = ch;
    reverse(A, l + 1, h - 1);
    }
}

function reverseInParentheses(inputString) {
    let st = [];
    for (let i = 0; i < inputString.length; i++){
        if (inputString[i] == '('){
            st.push(i);
        }
        else if (inputString[i] == ')'){
            let A = [...inputString]
            reverse(A, st[st.length-1] + 1, i);
            inputString = [...A];
            st.pop();
        }
    }
    
    let res = "";
    for (let i = 0; i < inputString.length; i++){
        if (inputString[i] != ')' && inputString[i] != '('){
            res += (inputString[i]);
        }
    }
    return res;
}
