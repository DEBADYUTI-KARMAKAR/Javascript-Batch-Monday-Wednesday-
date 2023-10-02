//15=1,3,5,15
//8=1,2,4,8
function gcd(a,b){
    if(b==0){
        return a;
    }
    else{
        temp=a%b
        return gcd(b,temp);
    }
}
let a=15;
let b=8;
console.log(gcd(a,b));