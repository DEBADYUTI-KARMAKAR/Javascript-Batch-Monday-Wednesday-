let num=369;
let sum=0
while(num>0){
    let r=num%10;
    sum+=r
    num=parseInt(num/10);
}
console.log(sum);