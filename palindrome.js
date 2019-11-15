//palindrome is a word or sentence that reads the same backwards and forwards
const palindrome = str => {
 // make the string lowercase
 str = str.toLowerCase()
   // this is best accomlished by turning the string into an array, reversing it, making our comparison and then put it back together
 return str === str.split('').reverse().join('')
}
/* in console, test the code with the following:
palindrome ("Abba");
palindrome ("Anna");
palindrome ("coding");
palindrome ("racecar");
palindrome {"syntatic"}; */
