//Find the smallest element in an array
let arr=[5,8,10,2];
let min=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log(min);