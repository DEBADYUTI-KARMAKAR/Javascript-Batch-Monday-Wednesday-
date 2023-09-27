function power(base, expo) {
    return base ** expo;
}
function len(num) {
    let count = 0
    while (num > 0) {
        count += 1;
        num=parseInt(num/10);
    }
    return count;
}
let num = 1634;
let temp=num;
let expo=len(num);
let sum=0;
while(num>0){
    let r=num%10
    sum+=power(r,expo);
    num=parseInt(num/10);
}
//console.log(sum);
if(sum==temp){
    console.log("Armstrong Number");
}else{
    console.log("Not Armstrong Number");
}