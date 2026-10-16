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




//day 5
// create a book object with title,author and price
let book = {
    title : "Hobbit",
    author : "Tolkie", 
    price : 2500
};
book.price = 150;
console.log(book);
 //create a nested user object and print the city
     let user = {
          username:"srih",
          email:"srih@gmail.com",
          address:{
            street: "123 main st",
            location:"chennai",
            zipcode : "600201"
          }
     };
     console.log(user.address.city);
//create a array of three product object and print each product name
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Headphones" }
];

products.forEach(product => {
  console.log(product.name);
});
//use destructuring to extract two properties from an object
const product = {
  id: 101,
  name: "Wireless Mouse",
  price: 25.99,
  category: "Electronics"
};
const { names, price } = product;

console.log(names);  
console.log(price); 
//use spread to copy an array and combine two arrays
const standardFeatures = ["Air Conditioning", "Power Steering"];
const premiumFeatures = ["Sunroof", "Leather Seats"];
const fullPackage = [...standardFeatures, ...premiumFeatures];
console.log(fullPackage);
//wrie a functioon that user rest parameters to add any number of values.
function sumAll(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
console.log(sumAll(5, 10));         
console.log(sumAll(1, 2, 3, 4, 5)); 
console.log(sumAll());             
//usew option chaining and ??? to safetly read a missing user city and provide a fall back
const userWithoutCity = {
  id: 1,
  name: "babu",
  profile: {
    age: 53
  }
};
const city = userWithoutCity.profile?.address?.city ?? "Unknown City";
console.log(city); 



