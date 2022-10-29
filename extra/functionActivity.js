const myPlot = { plot_cost: 2500, building_cost: 3400, broker_percentage: 0.1 };

const bill = (myPlot) => {
  let cost = myPlot.plot_cost- myPlot.building_cost;
  let profit = myPlot.building_cost - myPlot.plot_cost;
  let all = myPlot.building_cost + myPlot.plot_cost + myPlot.plot_cost;
  const html = `<div>
        <p>the cost was:${myPlot.building_cost}</p>
        <p>the profit was:${profit}</p>
        <p>all is:${all}</p>
        </div>`;
  return html;
}
document.body.innerHTML = bill(myPlot);


/*function calculateHouseCost(myPlot) {
  let total = myPlot.plot_cost + myPlot.building_cost;
  brokerFee = total * myPlot.broker_percentage;

  let tT = total + brokerFee;

  const html = `<div>
            <p>plot cost:${myPlot.plot_cost}</p>
            <p>building cost:${myPlot.building_cost}</p>
            <p>total fee:${tT}</p>
            <p>total fee:${brokerFee}</p>

            </div>`;
  return html;
}
document.body.innerHTML = calculateHouseCost(myPlot);
*/

/*
let plotA = { building: 23, purchase: 43, sell: 32 };
function buyPlot(plotA) {
  let cost = plotA.purchase - plotA.building;
  let profit = plotA.sell - plotA.building;
  let all = plotA.building + plotA.sell + plotA.purchase;
  const html = `<div>
        <p>the cost was:${plotA.building}</p>
        <p>the profit was:${profit}</p>
        <p>all is:${all}</p>
        </div>`;
  return html;
}
document.body.innerHTML = buyPlot(plotA);*/
/*function addition(){
  const total = a+b;
  return total;
}
let ans = addition(57,7);
const add = (a, b=3)=>{
  const total = a+b;
  return total;
}
add(54,7)*/
function addition() {
  const cost = plotA.purchase - plotA.building;
  const profit = plotA.sell - plotA.building;
  const all = plotA.building + plotA.sell + plotA.purchase;
  return all;
}
let ans = addition