/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
*/

function almostIncreasingSequence(sequence, wrong = 0) {
    for (let i = 0; i < sequence.length-1; i++){
        if (sequence[i] >= sequence[i+1]){
            if (wrong === 0){
                wrong++;
                let a;
                if (sequence[i+1] <= sequence[i-1]){
                    a = i+1;
                }
                else {
                    a = i;
                }
                let grb = sequence.splice(a, 1);
                console.log(sequence);
                return almostIncreasingSequence(sequence, wrong);
            }
            else{
                return false;
            }
        }
    }
    return true;
}
