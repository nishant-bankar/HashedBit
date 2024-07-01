function findTax(salary) {
    let tax;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.2;
            break;
        case (salary > 1500000):
            tax = salary * 0.3;
            break;
        default:
            return "Invalid salary input!";
    }
    return tax;
}


console.log(findTax(600000));


// Output: 60000 (10% tax on 600000)
