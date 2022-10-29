let student = {
  Name: "AbdulRahman",
  grade: 4,

  Phil(marks, total = 70) {
    return (marks*100) / total;
  },
  lite(marks, total = 70) {
    return (marks * 100) / total;
  },
  Agri(marks, total = 70) {
    return (marks * 100) / total;
  },
  maths(marks, total = 70) {
    return (36 * 100) / total;
  },
  phyc(marks, total = 70)
  //if you pass the values in the above rather than writting marks then there's no need of writting the values when you document.body.innerHTML...
   {
    return (marks * 100) / total;
  },
  myTotal(Phil, lite, Agri, maths, phyc) {
    let total = Phil + maths + phyc + lite + Agri;
    let average = total / 5;
    return average;
  },
};
document.body.innerHTML = `
    <h1> Report Card </h1>
    <h2> Student name: ${student.Name}</h2>
    <p>
    Phil: ${Math.round(Number.EPSILON + student.Phil(45, 70)).toFixed(2)}%<br> 
    phyc: ${Math.round(student.phyc(56, 70))}%<br>
    maths: ${Math.round(student.maths())}%<br>
    Agri: ${Math.round(student.Agri(67, 70))}%<br>
    lite: ${Math.round(student.lite(54, 70))}%<br>
    Total Score: ${Math.round(student.myTotal(45, 56, 36, 67, 54))}%<br>
    </p>`;
    // toFixed() passes the number od dp that you want to make to. see phil for reference.
//  function sayHello(){
//    let you = prompt("What's your name? ");
//    console.log("Hello", you + "!");
//    return you;
//  }
//  document.body.innerHTML = sayHello();

// sayHello = () => console.log("hi");
// How do we write the above function to be an arrow function? i.e sayHello.
// the issue is we have a variable you assigned the function prompt...kinda messy
// addTwoNumbers = (x, y) => console.log(x + y);
// function addTwoNumbers(){
//   let x = 5;
//   let y = 6;
//   console.log(x+y);
// }
// why can't I add the values inside the bracket after calling the function?
// // as an arrow function
// addNumbers = (x, y) => console.log(x+y);
//             // SPREAD OPERATOR!!!!!
//           // It's a special operator consistin of 3 dots before it i.e ...spread.
//           //used to add  individual elements in an array.
//           let a = ["so", "much", "fun"]
//           let message = ["javaScript", "is", ...a]
//           console.log(message);
//                     //use to pass multiple args
//               function addNums(x, y){
//                 console.log(x+y);
//               }
//             let arr = [5, 9];
//             addNums(...arr);

//         //Output is 14 since its like calling a num with 5,9 as the parameters.

//               ///REST OPERATOR
//           //same symbol as rest operator.
//         //It's useful when you dont know how many parameters to expect to be passed in a function
//       //eg
//     function someFunction (para1, ...para2) {
//       console.log(para1, para2);
//     }
//     someFunction("HI","there", "my name is rayan", "kiarie");
//     // from the console we can see that "there my name is rayan kiarie" is outputed as an array.
//   //containing third and fourth args. used in loops.
              