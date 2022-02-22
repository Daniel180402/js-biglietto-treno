const x = prompt("What is your age?");
const age = parseInt(x);
console.log(age);

const y = prompt("How many kilometers do you want to travel?");
const km = parseInt(y);
console.log(km);

const basekm = 0.21;

let price;
let finalprice
let discount

if( isNaN(age)){
    console.warn("I'm sorry, you didn't enter a number, please reload the page to try again");
}
if( age >= 150 ){
    console.warn("I'm sorry, the numer you entered is to big, please reload the page to try again");
}

if( isNaN(km)){
    console.warn("I'm sorry, you didn't enter a number, please reload the page to try again");
}
if( km < 1 ){
    console.warn("I'm sorry, the numer you entered is to small, please reload the page to try again");
}

price = km * basekm;

if(age < 18){
    discount = (price / 100) * 20;
    finalprice = price - discount;
}
else if(age > 65){
    discount = (price / 100) * 40;
    finalprice = price - discount;
}
else{
    finalprice = price;
}

document.getElementById("ticket-price").innerHTML = finalprice.toFixed(2) + " Euro";