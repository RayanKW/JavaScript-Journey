let num = Number(prompt("enter a number between 1-6"));
let randomNumber = Math.floor(Math.random() * 6) + 1;
let playGame = () => {
  return new Promise((resolve, reject) => {
      if (num === randomNumber) {
        resolve(2);
      } 
      if (isNaN(num)){
        reject(new Error("Wrong input type"))
      }
      else {
        reject(console.log("try again"));
      }
  });
}
let handleGuess = async ()=>{
  let result = await playGame();
  alert(result);
  handleGuess();
}
// playGame(true)
// .then((result)=>{
//     alert(`user got ${result} points`)
// })
// .catch((error)=>{
//   console.log('error')
// })
// .finally(()=>{
//     console.log('hey')
// })
// function wait(ms){
//     return new Promise((resolve)=>{
//       setTimeout(resolve, ms)
//     });
//   }
// async function play(){
//     console.log('starting');
//     await wait(2000);
//     console.log('ending')
// }
// play();
// playGame();