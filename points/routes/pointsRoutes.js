//map of points for each payer
let pointMap = new Map();

//array of points per payer and the timestamps (array of objects)
let payerPointLog = [];

//addPoints to payer
function addPoints(payer, points){
    //set or update payer points
    if(pointMap.has(payer)){
        let currVal = pointMap.get(payer) + points;
        if(currVal<0){
            pointMap.set(payer,0)
        }else{
            pointMap.set(payer, currVal)
        }
    }else{
        pointMap.set(payer,points)
    }

    //keep a log off the points
    let pointObj = {Payer : payer, Points : points}
    payerPointLog.push(pointObj);
}

//spendPoints
function spendPoints(points){
    //go through the point log, subtracting and poping the values
    let currPoints = points;
    while(currPoints>0){
        //check if first payer has enough points to spend
        let payerCurrPoints = payerPointLog[0][Points];
        let payer = payerPointLog[0][Payer];
        // let payerPoints = pointMap.get(payer);
        // while(payerPoints < )
        //if the currPoints is greater than the points at the first index, subtract the first index points from the relative payer, then subtract from the currpoints
        if(currPoints > payerCurrPoints){
            let currVal = pointMap.get(payer);
            if(currVal<currPoints){ //if the current payer has less than the current points, set the points to 0, and set to the next payer
                currPoints = currPoints - currVal;
                pointMap.set(payer, 0)
                payerPointLog.pop();
                payerCurrPoints = payerPointLog[1][Points];
            }else{
                currPoints = currPoints - payerCurrPoints;
                currVal = currVal - payerCurrPoints;
                pointMap.set(payer,currVal);
                payerCurrPoints = payerCurrPoints - currVal;
            }
        }else{ //else, subtract the currpoints from the first index points and from the relative payer, and set the currPoints to 0
            let currVal = pointMap.get(payer) - currPoints;
            pointMap.set(payer,currVal);
            payerCurrPoints = payerCurrPoints - currVal;
        }
        payerPointLog[0][Points] = payerCurrPoints;
        if(payerPointLog[0][Points] === 0){
            payerPointLog.pop();
        }
    }
}


function spendPoints1(){

}

//display points for specific payer
function displayPoints(){
    console.log(pointMap);
    console.log(payerPointLog);
}

//display points for specific payer
function payerPoints(payer){
    console.log(pointMap.get(payer));
    const element = (
        <div>
            <h2>Points of Payer: {payer}</h2>
        </div>
    )
    ReactDOM.render(element, document.getElementById('payerPoints'))
}

export {addPoints, spendPoints, displayPoints, payerPoints}