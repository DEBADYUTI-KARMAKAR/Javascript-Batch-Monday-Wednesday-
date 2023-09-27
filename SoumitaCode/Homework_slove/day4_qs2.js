//Swap two numbers using function takes something returns nothing.
function swap(a,b){
    let c=a;
    a=b;
    b=c;
    console.log("After swapping num1 is: "+a+" and num2 is: "+b);
}
let num1=2;
let num2=3;
console.log("Before swapping num1 is: "+num1+" and num2 is: "+num2);
swap(num1,num2);
