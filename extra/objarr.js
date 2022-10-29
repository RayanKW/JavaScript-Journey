const students = [
  { name: "Raya",
   age: "7",
    gender:"F",
    studId:'1643' },
  {
    name: "Joshua",
    age: "6",
    gender: "male",
    studId:'1224'
  },
  {
    name: "Cyrus",
    gender: "M",
    age: "8",
    studId:'1278'
  },
  {
    name: "rayan",
    age: "4",
    gender: "F",
    studId:'1239'
  },
  {
    name: "Jos",
    age: "6",
    gender: "male",
    studId:'1238'
  },
  {
    name: "Cys",
    gender: "M",
    age: "8",
  },
  {
    name: "ryan",
    age: "4",
    gender: "F",
    studId:'1235'
  },
  {
    name: "os",
    age: "6",
    gender: "male",
    studId:'1244'
  },
  {
    name: "Cs",
    gender: "M",
    age: "8",
    studId:'1434'
  },
  {
    name: "ryn",
    age: "4",
    gender: "F",
    studId:'1234'
  },
];

const studentsUnder10 = students.filter(function(student){
    //the function(student) we passed student not student so when checking the age we are going to 
    //use sudent.age<
    if (student.age<5){
        return true;
    } else{
        return false;
    }
   //return student.age<10;
});
console.table(studentsUnder10);
   //alternatively we can replace replace the if statement with a return. i.e
  
    //see below.
    
const studentsAbove5 = students.filter(function(student){
    return student.age>5;
})
console.table(studentsAbove5);
const uniqueStudent = students.find(stude => stude.Id === '1234');
console.log(uniqueStudent);

let ordersTotal = [32, 43, 44, 65, 76, 87];
const total = [32, 43, 44, 65, 76, 87].reduce((partialSum, a) => partialSum + a, 0);
console.log(total);
//forEach
let num = 0;
const ttal = ordersTotal.forEach(function(item){
    return num += item;
})
console.log(num)
// using mapping
const numb = [1, 4, 5, 8];
let ab = 0;
mapTotal = ordersTotal.map(function(item){
    return ab+=item;
})
console.log(ab)
// for loop
let numbr = [1, 7, 8, 9];
let ac = 0;
for (i=0; i<ordersTotal.length; i++){
    ac += ordersTotal[i];
}
console.log(ac);
//using reduce
let number = [1, 7, 8, 9, 10, 34];
const totalReduce = number.reduce((a, b)=>a+b);
console.log(totalReduce);