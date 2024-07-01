
let string = 'INDIA';
string = string.split('');
string.splice(3, 0, 'O');
string = string.join('');

console.log(string);
