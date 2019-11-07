//palindrome is a word or sentence that reads the same backwards and forwards
const palindrome = str => {
 // make the string lowercase
 str = str.toLowerCase()
 //reverse input string and return the result of the comparison
 // string.split turns it into an array, reverse it and then put it back together
 return str === str.split('').reverse().join('')

}
/* in console, test the code with the following:
palindrome ("Abba");
palindrome ("Anna");
palindrome ("coding");
palindrome ("racecar");
palindrome {"syntatic"}; */
