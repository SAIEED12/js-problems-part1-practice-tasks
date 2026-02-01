/* Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming

 */

function longestWord(str) {
  let a = str.split(" ");
  let count = 0;
  let longest = "";
  for (let i of a) {
    if (count < i.length) {
      longest=i;
      count = i.length;
    }
  }
  return longest;
}

console.log(longestWord("I am learning Programming to become a programmer"));
console.log(longestWord("I am"));
