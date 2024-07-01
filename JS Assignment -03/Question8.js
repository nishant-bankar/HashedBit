function repeatedSum(num) {
    while (num > 9) {
        num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
}

console.log(repeatedSum(456)); 
// Output: 6
