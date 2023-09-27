let num=369;
let sum=0;
while(num>0){
    let r=parseInt(num%10);
    sum=sum*10+r;
    //num=Math.floor(num/10);
    num=parseInt(num/10);
}
while(sum>0){
    let r=parseInt(sum%10);
    console.log(r);
    //sum=Math.floor(sum/10);
    sum=parseInt(sum/10);
}