let a=[12,2,6,3,7,8];
let sum=0;
let largest=0;
for(let i=0;i<a.length;i++){
    if(a[i]>largest){
        largest=a[i];
    }
    sum+=a[i];
}
console.log("sum is : "+sum);
console.log("largest number is : "+largest);