/* You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0

 */

function repeatedNum(find){
    const numbers = [5, 6, 11, 12, 98, 5];
    let count = 0;
    for(let i of numbers){
        if(find === i){
            count++;
        }
    }
    console.log(count);
}
console.log(repeatedNum(5));
console.log(repeatedNum(25));
