//calculate uber price

class uberPrice{
    constructor(baseFare,permintsCost,permileCost){
        this.baseFare=baseFare;
        this.permintsCost=permintsCost;
        this.permileCost=permileCost;
    }
    calculateprice(distance, duraction){
        const price=this.baseFare+( this.permintsCost*duraction)+(this.permileCost*distance)
    return price;
    } 
}
const colculator=new uberPrice(34,4,8);
const duraction=20;
const distance=10;
const price=colculator.calculateprice(distance,duraction);
console.log(price)