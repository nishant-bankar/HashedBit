function sumOfProducts(n1, n2) {
    let sum = 0;
    while (n1 > 0 && n2 > 0) {
        const digit1 = n1 % 10;
        const digit2 = n2 % 10;
        sum += digit1 * digit2;
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }
    return sum;
}

console.log(sumOfProducts(6, 34)); 

// Output: 24
