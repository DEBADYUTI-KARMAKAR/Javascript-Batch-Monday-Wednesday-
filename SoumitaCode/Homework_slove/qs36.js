function power(base, expo) {
    return base ** expo;
}
let a=4;
let b=3;
let c=5;
let sum=(power(a,2)+power(b,2));
if(sum==power(c,2)){
    console.log("Pythagorean triangle");
}else{
    console.log("Not Pythagorean Triangle");
}