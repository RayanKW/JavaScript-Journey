student = {
  grade: 4,

  Eng(marks, total = 80) {
    return (marks / total) * 100;
  },
  sub2(marks, total = 70) {
    return (marks / total) * 100;
  },
  sub3(marks, total = 80) {
    return (marks / total) * 100;
  },
  sub4(marks, total = 70) {
    return (marks / total) * 100;
  },
  sub5(marks, total = 60) {
    return (marks / total) * 100;
  },
  sub6(marks, total = 90) {
    return (marks / total) * 100;
  },
  myTT() {
    let TT = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;
    let avg = TT / 6;
    return avg;
  },
};
let reportKadForm = document.querySelector("[name = example]");
reportKadForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let sub1 = event.currentTarget.sub1.value;
  console.log(sub);
  let sub2 = event.currentTarget.sub2.value;
  console.log(sub2);
  let sub3 = event.currentTarget.sub3.value;
  console.log(sub3);
  let sub4 = event.currentTarget.sub4.value;
  console.log(sub4);
  let sub5 = event.currentTarget.sub5.value;
  console.log(sub5);
  let sub6 = event.currentTarget.sub6.value;
  console.log(sub6);
});