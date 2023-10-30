let a = 10;
let b = "Hello";
let ar = [1,2];

try {
    let c = a/b;
    console.log(c);
    
} catch (error) {
    console.log("Enter right choice");
}


function print(){
    console.log("Hello");
}
try {
    print();
} catch (error) {
   console.log("Enter right choice");   
}finally{
    console.log("Thankyou");
}