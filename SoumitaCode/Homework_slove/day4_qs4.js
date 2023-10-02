//Calculating the factorial of a number using function takes something returns something
function fact(n) {
    let c = 1
    for (let i = 1; i <= n; i++) {
        c *= i;
    }
    return c;
}
console.log("Factorial is "+fact(5));
