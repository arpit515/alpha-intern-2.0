(function(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${num} is ${factorial}`);
})(5); 