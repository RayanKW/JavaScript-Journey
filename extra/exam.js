let student = {
  grade: 4,

  Phi(marks, total = 70) {
    return (marks * 100) / total;
  },
  lit(marks, total = 70) {
    return (marks * 100) / total;
  },
  com(marks, total = 70) {
    return (marks * 100) / total;
  },
  mat(marks, total = 70) {
    return (36 * 100) / total;
  },
  phy(
    marks,
    total = 70 //if you pass the values in the above rather than writting marks then there's no need of writting the values when you document.body.innerHTML...
  ) {
    return (marks * 100) / total;
  },
  myTotal(Phi, lit, com, mat, phy) {
    let total = Phi + mat + phy + lit + com;
    let average = total / 5;
    return average;
  },
};
function gradddes(marks){
if (marks >= 40) {
  return ("A");
} else if (marks >= 30 && marks < 40) {
  return ("B");
} else if (marks >= 20 && marks < 30) {
  return ("C");
} else if (marks >= 10 && marks < 20) {
  return ("C");
} else marks > 10;
{
  return ("E");
}
return marks
}
let reportCardForm = document.querySelector("[name = Report]");
reportCardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let a = event.currentTarget.name.value;
  console.log(a);
  let maths = event.currentTarget.maths.value;
  console.log(maths);
  let phil = event.currentTarget.phil.value;
  console.log(phil);
  let lite = event.currentTarget.lite.value;
  console.log(lite);
  let comp = event.currentTarget.comp.value;
  console.log(comp);
  let phyc = event.currentTarget.phyc.value;
  console.log(phyc);

  document.body.innerHTML = `
            <h1> Report Card </h1>
            <h2> Student name: ${a}</h2>
            <p>
            Phil: ${Math.round(Number.EPSILON + student.Phi(phil)).toFixed(
              2
            )}% Grade: ${gradddes(phil)}\<br> 
            phyc: ${Math.round(student.phy(phyc))}%: Grade: ${gradddes(phyc)}<br>
            maths: ${Math.round(student.mat(maths))}%: Grade: ${gradddes(maths)}<br>
            Agri: ${Math.round(student.com(comp))}%: Grade: ${gradddes(comp)}<br>
            lite: ${Math.round(student.lit(lite))}%: Grade: ${gradddes(lite)}<br>
            Total Score: ${Math.round(student.myTotal(45, 56, 36, 67, 54))}%<br>
            </p>`;
});
Math.round();
