let arr = [3,5,6,8];
let a = [3,9,2,4,5];

let res = a.reduce((pv,cv,ci)=>{

    console.log(pv+" "+cv+" "+ci);
    return pv*cv;
})

console.log(res);
console.log(a);