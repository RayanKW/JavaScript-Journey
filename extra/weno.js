let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function getArr(arr) {
  let a = 0;
  let posArr = arr.filter((num) => num > -1);
  const addSum = posArr.reduce((a, b) => a + b);
  console.log(addSum);
  // mapping
  let ad = 0;
  mapT = posArr.map(function (numg) {
    return (ad += numg);
  });
  let acd = posArr.length;
  console.log(ad);
  console.log(acd);

  // OR
  /*
const posArr = ar.filter(function(num){
    return num > -1;
});
// */
  let negaArr = arr.filter(function (num) {
    return num < 0;
  });
  const addNeg = negaArr.reduce((a, b) => a + b);

  // let arry = [-32, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
  // let positveArr = arry.filter(()=>num > -1);
  console.log(addNeg);
  return [acd, addNeg];
}
// console.log(add);
console.log(getArr(arr));
