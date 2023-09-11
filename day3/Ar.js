let arr = [2,3,6,"hello","💯"];
console.log(arr);

for(let i =0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.push(33); // add last
arr.push(45);
arr.push("Hii");
console.log(arr); 

let k = arr.length;
console.log(k);

arr.pop();  // delete from last
console.log(arr.length);
arr.pop();
console.log(arr);

arr.shift(); // delete from first
console.log(arr);
console.log(arr.length);

arr.unshift(62);
arr.unshift(63);
arr.unshift(55);
arr.unshift(36);
console.log(arr);

