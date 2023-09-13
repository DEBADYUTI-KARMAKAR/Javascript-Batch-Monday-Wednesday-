let obj =

{
    fname:"Debadyuti",
    lname:"Karmakar",
    age:22,
    postBody:"khjshdfgjslofjg",
    tech:['java','javascript','react',
    'node','springboot'
    ],
    bio: function Bio(){
        return "Hello";
    },
    demo:{
        hobby:"Football",
        h:"d"
    }

};
console.log(obj);
console.log(obj.fname);
console.log(obj.lname);
console.log(obj.age);
console.log(obj.tech);
console.log(obj.bio());
console.log(obj.demo.hobby);
console.log(obj.demo);
// obj.bio();
// console.log(obj.demo.hobby);