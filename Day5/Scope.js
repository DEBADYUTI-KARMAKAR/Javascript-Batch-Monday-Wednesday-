// what is block?
// {
//     let a = 5;
//     console.log(a);
// }

// if(true) true;

// {
//     var a = 10;
//     var b = 20;
//     var c = 30;
//     console.log(a); //10
//     console.log(b); //20
//     console.log(c); //30
// }

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30


// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a); //
//     console.log(b); //
//     console.log(c); //
// }

//  console.log(a); // 
// // console.log(b); // 
// // console.log(c); // 

// // Shadowing
// var a = 1;
// let b = 2;
// const c = 3;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a); // 10
//     console.log(b); // 20 
//     console.log(c); // 30
// }

//  console.log(a); // 10
// console.log(b); // 2
// console.log(c); // 3

//Illigal shadowing

// let a = 10;
// {
//     var a = 20;
// }

// it different in function
let num = 50;
function Demo(){
    var num = 20;
}