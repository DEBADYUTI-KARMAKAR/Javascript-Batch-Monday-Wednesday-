let arr = [2,3,6,"hello","UK",6,4];
console.log(arr);
console.log(arr.includes(2));
console.log(arr.includes(22));
console.log(arr.indexOf("hello")); // print index

console.log(arr.indexOf(6));
console.log(arr.lastIndexOf(6));
console.log("````");
// for each loop
arr.forEach((val)=>{
    console.log(val);
})
console.log("````");
arr.forEach(function(value){
    console.log(value);
})