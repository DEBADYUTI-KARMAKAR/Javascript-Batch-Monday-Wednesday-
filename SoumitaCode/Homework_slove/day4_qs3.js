//Calculating the sum of n numbers using function takes nothing returns something.
function nNumSum(){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i
    }
    return sum;
}
let n=5;
console.log("sum is : "+nNumSum());