let str = 'This is a sample string with vowels and consonants';
let vowels = str.match(/[aeiou]/gi).length;
let consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
