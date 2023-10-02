// let data =[
//     {
//         id:1,
//         fname:"Debadyuti",
//         lname:"Karmakar"
//     },
//     {
//         id:2,
//         fname:"Mouman",
//         lname:"Dig"
//     },
//     {
//         id:3,
//         fname:"Soumita",
//         lname:"Das"
//     }
// ]
// console.log(data[0]);
// console.log(data[0].fname);
let obj = [
  {
    id: 1,
    fname: "arik",
    lname: "dig",
    post: "football",
    like: 50,
    dislike: 3,
    comment: [
      {
        id: 1,
        fname: "rik",
        lname: "ghosh",
        body: "i love football",
        like: 10,
        dislike: 1,
        report: 0,
      },
      {
        id: 2,
        fname: "rosh",
        lname: "ghosh",
        body: "I dream football",
        like: 19,
        dislike: 5,
        report: 0,
      },
      {
        id: 3,
        fname: "Ankit",
        lname: "Ghosh",
        body: "I live for football ",
        like: 30,
        dislike: 4,
        report: 0,
      },
      {
        id: 4,
        fname: "Debo",
        lname: "ghosh",
        body: "I love football everytime",
        like: 10,
        dislike: 1,
        report: 0,
      }
    ]
  }
];
for(let i=0;i<obj.length;i++){
    console.log(obj[i].fname);
}