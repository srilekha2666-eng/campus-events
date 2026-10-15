console.log("name:Srilekha");
console.log("dep:csbs");
console.log("number:10");
let eventname= "tech fest";
let ticketprice =250;
let seatsLeft= 3;
console.log(eventname);
console.log(ticketprice);
console.log(seatsLeft);
let t1 = 5;
let t2 = 6;
let t3 = 8;
let sum = t1+t2+t3;
if(sum>500)
    console.log("total price exeeds");
else
    console.log("total price not exceeds")
let num =6;
if(num > 0)
    console.log("postive");
else if(num < 0)
    console.log("negative");
else
    console.log("zero")
let n = 10;
for(let i = 2; i <= n; i++)
{
    if ( i % 2 == 0);
    {
        console.log(i)
    }
}
//return
function calculate(price, quantity) {
  return price * quantity;}
console.log(calculate(6,7));
//write a function that accept a name and print a greeting

function greeting(name){
    console.log("hello,"+name);
}

//create an array a five event names and print its length
const Events =["dance","signing","lemon in spoon","mimcry","desinig"];
console.log(Events.length);

//use filter() to keep number greater that 10

//map
let numbers = [4,5,7,9,10];
let result= numbers.map(numbers =>numbers* 2);
console.log(result);
//reduce
const prize=[20,30,40];
let finalvalue = prize.reduce((sum,numbers) => sum + numbers,0);
console.log(finalvalue);


     