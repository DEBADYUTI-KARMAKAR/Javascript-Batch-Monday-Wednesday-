let age = [23,25,13,18,25,14,21,31];

// let vote = true;
// for(let i = 0;i<age.length;i++){
//     if(age[i]<18){
//         vote = false;
//         break;
//     }
// }

// if(vote){
//     console.log("E F V");
// }else{
//     console.log("Not");
// }

let res = age.every((e)=>e>18)
console.log(res);