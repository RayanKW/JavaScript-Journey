// console.log("consoling here 1");
// setTimeout(()=>{
//     console.log("running");
// }, 2000);
// console.log("console here too")

const onMyBday = (isCyrSick) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isCyrSick === false) {
        resolve(4);
      } else {
        reject(new Error("I am sad")); //here instead of reject(console.log("I am sad"))
        //by doing so we avoid the error when is sick is true.(undefined error)
      }
    }, 2000);
  });
};
onMyBday(true)
.then((result) => {
  console.log(`I have ${result} cakes`);
})
.catch((error) => {
  console.log(error);
})
.finally(() => {
  console.log("Partty!");
});
function wait(ms){
  return new Promise((resolve)=>{
    setTimeout(resolve, ms)
  });
}
async function go(){
  console.log('starting');
  await wait(2000);
  console.log('ending');
}
go();
// console.log(go())
// console.log(onMyBday(false));
