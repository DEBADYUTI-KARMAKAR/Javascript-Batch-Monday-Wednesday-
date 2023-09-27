//Add all even numbers from an array
let arr=[5,8,7,2];
let sum=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        sum+=arr[i];
    }
}
console.log(sum);