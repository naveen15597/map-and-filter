const names= [
    {name:"Naveen",gender:"Male"},
    {name:"Lakshmi",gender:"Female"},
    {name:"Arjuna",gender:"Male"},
    {name:"Aadharsh",gender:"Male"},
    {name:"Lilly",gender:"Female"},
    {name:"Bahubali",gender:"Male"},
];

console.log("List of students = ",names);

console.log("Female students = ",names.filter((val)=> val.gender==="Female")
.map((val=> val.name)));

console.log("Students Names starting with A = ",names.filter((val)=> val.name.toLowerCase().charAt(0)=='a').map((val=>val.name)));

console.log("Count of Male students = ",names.filter((val)=> val.gender=='Male').map((val)=>val.name).length);



//Task1
//get all female students
//Task2
// persons whose names starts with a
//Task 3
//count no. of males
