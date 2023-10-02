let num=369;
let sum=0;
while(num>0){
    let r=parseInt(num%10);
    sum=sum*10+r;
    //num=Math.floor(num/10);
    num=parseInt(num/10);
}
console.log(sum);