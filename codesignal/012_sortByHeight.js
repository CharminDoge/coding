/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/

function sortByHeight(a) {
    let one = [];
    for (let i = 0; i < a.length; i++){
        if (a[i] === -1){
            one.push(i);
        }
    }
    a.sort((a, b) => a - b);
    console.log(a);
    let arr = [];
    let j = 0;
    let k = one.length;
    for (let i = 0; i < a.length; i++){
        if (i === one[j]){
            j++;
            arr[i] = -1;
        }
        else{
            arr[i] = a[k];
            k++;
        }
    }
    return arr;
}
