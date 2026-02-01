/* Write a function to count the number of vowels in a string. */

const str = "I am learning Programming to become a programmer";
function countVowel(str) {
  let lower = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i of lower) {
    for (let j of vowels) {
      if (i === j) {
        count++;
      }
    }
  }
  return count
}
console.log(countVowel(str));
console.log(countVowel('aeiou'));
console.log(countVowel('ae'));
