let arr=[
    {
        id:1,
        fname: "Soumita",
        lname: "Das",
        post:"Good morning, everyone! Have a nice day.",
        like: 50,
        dislike: 1,
        share: 12,
        comment: [
            {
                id:4,
                fname:"Susmita",
                lname:"Sinha",
                body: "Good Morning! How is it going?",
                like:14,
                dislike:2,
                report:0
            },
            {
                id:9,
                fname:"Ruban",
                lname:"Pathak",
                body: "Wishing you a wonderful morning!!",
                like:15,
                dislike:1,
                report:0
            },
            {
                id:6,
                fname:"Souvik",
                lname:"Banerjee",
                body: "Morning! Good day to you too.",
                like:16,
                dislike:2,
                report:0
            }
        ],
        report:0
    },
    {
        id:2,
        fname: "Samarpita",
        lname: "Mukherjee",
        post:"Hello conection!",
        like: 70,
        dislike: 10,
        share: 21,
        comment: [
            {
                id:7,
                fname:"Riyanka",
                lname:"Dey",
                body: "Hello! How are you?",
                like:60,
                dislike:3,
                report:6
            },
            {
                id:8,
                fname:"Sobhan",
                lname:"Sen",
                body: "Hey!!",
                like:15,
                dislike:6,
                report:3
            }
        ],
        report:3
    },
    {
        id:3,
        fname: "Subrata",
        lname: "Saha",
        post:"The purpose of our lives is to be happy.",
        like: 100,
        dislike: 10,
        share: 50,
        comment: [
            {
                id:5,
                fname:"Sk md",
                lname:"Altab",
                body: "Ture lines",
                like:10,
                dislike:2,
                report:1
            },
            {
                id:10,
                fname:"Arpan",
                lname:"Ghosh",
                body: "Absolutely right",
                like:20,
                dislike:7,
                report:2
            },
            {
                id:9,
                fname:"Ruban",
                lname:"Pathak",
                body: "Freshness of love",
                like:9,
                dislike:2,
                report:1
            },
            {
                id:1,
                fname:"Soumita",
                lname:"Das",
                body: "That is entirely correct",
                like:10,
                dislike:3,
                report:1
            }
        ],
        report:2
    },
    {
        id:4,
        fname: "Susmita",
        lname: "Sinha",
        post:"What a cloudy weather.",
        like: 65,
        dislike: 12,
        share: 13,
        comment: [
            {
                id:2,
                fname:"Samarpita",
                lname:"Mukherjee",
                body: "Yeah but I don't like this weather.",
                like:30,
                dislike:15,
                report:5
            },
            {
                id:1,
                fname:"Soumita",
                lname:"Das",
                body: "I'm feeling very sleepy.",
                like:40,
                dislike:3,
                report:2
            },
            {
                id:6,
                fname:"Souvik",
                lname:"Banerjee",
                body: "I'm suffering fever for this weather change.",
                like:35,
                dislike:5,
                report:1
            }
        ],
        report:3
    },
    {
        id:5,
        fname: "Sk md",
        lname: "Altab",
        post:"What's your favourite IPL team?",
        like: 650,
        dislike: 20,
        share: 120,
        comment: [
            {
                id:8,
                fname:"Sobhan",
                lname:"Sen",
                body: "KKR",
                like:100,
                dislike:6,
                report:3
            },
            {
                id:9,
                fname:"Ruban",
                lname:"Pathak",
                body: "CSK",
                like:1500,
                dislike:12,
                report:0
            },
            {
                id:1,
                fname:"Soumita",
                lname:"Das",
                body: "Obviously CSK (Only for Mahi)",
                like:2000,
                dislike:5,
                report:2
            }
        ],
        report:3
    },
    {
        id:6,
        fname:"Souvik",
        lname:"Banerjee",
        post:"Exams are here guys!! what about your preparation",
        like: 100,
        dislike: 80,
        share: 11,
        comment: [
            {
                id:7,
                fname:"Riyanka",
                lname:"Dey",
                body: "Provide me the syllabus🙂",
                like:60,
                dislike:3,
                report:6
            },
            {
                id:2,
                fname:"Samarpita",
                lname:"Mukherjee",
                body: "Is there any book available in college library",
                like:15,
                dislike:25,
                report:2
            },
            {
                id:10,
                fname:"Arpan",
                lname:"Ghosh",
                body: "This question only for altab,he studied everything",
                like:100,
                dislike:50,
                report:5
            }
        ],
        report:4
    },
    {
        id:7,
        fname:"Riyanka",
        lname:"Dey",
        post:"College life is very boring",
        like: 50,
        dislike: 30,
        share: 31,
        comment: [
            {
                id:8,
                fname:"Sobhan",
                lname:"Sen",
                body: "BCA is very easy but not for me",
                like:32,
                dislike:16,
                report:5
            },
            {
                id:4,
                fname:"Susmita",
                lname:"Sinha",
                body: "God bless you",
                like:10,
                dislike:2,
                report:3
            }
        ],
        report:3
    },
    {
        id:8,
        fname:"Sobhan",
        lname:"Sen",
        post:"I just hate BTS",
        like: 500,
        dislike:400,
        share: 200,
        comment: [
            {
                id:4,
                fname:"Susmita",
                lname:"Sinha",
                body: "I hate you",
                like:100,
                dislike:60,
                report:5
            },
            {
                id:6,
                fname:"Souvik",
                lname:"Banerjee",
                body: "Me too brother",
                like:16,
                dislike:2,
                report:0
            }
        ],
        report:15
    },
    {
        id:9,
        fname: "Ruban",
        lname: "Pathak",
        post:"Suggest me web series.",
        like: 200,
        dislike: 10,
        share: 1000,
        comment: [
            {
                id:1,
                fname:"Soumita",
                lname:"Das",
                body: "Mirzapur",
                like:800,
                dislike:1,
                report:0
            },
            {
                id:5,
                fname:"Sk md",
                lname:"Altab",
                body: "Sacret games",
                like:600,
                dislike:2,
                report:1
            },
            {
                id:10,
                fname:"Arpan",
                lname:"Ghosh",
                body: "All of us are dead",
                like:200,
                dislike:3,
                report:4
            },
            {
                id:6,
                fname:"Souvik",
                lname:"Banerjee",
                body: "Farzi",
                like:250,
                dislike:12,
                report:2
            }
        ],
        report:1
    },
    {
        id:10,
        fname:"Arpan",
        lname:"Ghosh",
        post:"Fest is knocking your door.Are you exited guys?",
        like: 50,
        dislike: 30,
        share: 31,
        comment: [
            {
                id:9,
                fname:"Ruban",
                lname:"Pathak",
                body: "I need Sunidhi Chowhan",
                like:1500,
                dislike:12,
                report:0
            },
            {
                id:4,
                fname:"Susmita",
                lname:"Sinha",
                body: "Too much excited!!",
                like:10,
                dislike:2,
                report:3
            },
            {
                id:7,
                fname:"Riyanka",
                lname:"Dey",
                body: "Arrange some good foods",
                like:60,
                dislike:3,
                report:6
            }
        ],
        report:3
    }
]
for(let i=0;i<arr.length;i++){
    console.log(arr[i].fname+" "+arr[i].lname);
}
console.log("\n");
for(let i=0;i<arr.length;i++){
    console.log(arr[i].post);
}
console.log("\n");
for(let i=0;i<arr.length;i++){
    if(arr[i].like>50){
        console.log(arr[i].post);
    }
}
console.log("\n");
for(let i=0;i<arr.length;i++){
    if(arr[i].report<5 && arr[i].dislike>10){
        console.log(arr[i].post);
    }
}
console.log("\n");
for(let i=0;i<arr.length;i++){
    if(arr[i].id==9){
        console.log(arr[i].comment);
    }
}
console.log("\n");
let max=0;
for(let i=0;i<arr.length;i++){
    if(arr[i].like>max){
        max=arr[i].like;
    }
}
console.log("\n");
for(let i=0;i<arr.length;i++){
    if(arr[i].like==max){
        console.log(arr[i].post);
    }
}
console.log("Highest Like: "+max);
console.log("\n");
let max2=0;
for(let i=0;i<arr.length;i++){
    if(arr[i].dislike>max2){
        max2=arr[i].dislike;
    }
}
console.log("Highest Dislike: "+max2);
console.log("\n");
let max3=0;
for(let i=0;i<arr.length;i++){
    if(arr[i].report>max3){
        max3=arr[i].report;
    }
}
console.log("Highest report: "+max3);
console.log("\n");
for(let i=0;i<arr.length;i++){
    if(arr[i].report>10){
       delete arr[i].post;
    }
}
for(let i=0;i<arr.length;i++){
    console.log(arr[i].post);
}