console.log(typeof "hello");
console.log(typeof 25);
console.log(typeof true);
let score;
console.log(score);
console.log(typeof score);

console.log(Number("10")+4);
console.log(String(12));
console.log("12"+13);
console.log("31"-15);


let age =20;
let seatsLeft = 5;
if(age >= 18 && seatsLeft > 0) {
    console.log("You can registre");
}
else{
    console.log("register unavailable");
}

let day = "saturday";
switch (day){
    case "saturday":
        console.log("Weekend");
        break;
        case "Sunday":
            console.log("Weekend");
            break;
            default:
            console.log("Weekdays")
}
//for loop
for(let i = 1; i < 5; i++){
    console.log(i);
}
//while loop

let count =1;
while(count <= 3)
{
    console.log(count);
    count++;
}
//functions
function greet(){
    console.log("Hello");
}
greet();
greet();
//parameters and arguments
function greets(name){
    console.log("Hello, " + name);
}
greets("shyn");
greets("sri");
//Arrow functions
const add = (a, b) => {
    return  a + b;
};
console.log(add(2,3));
const square = n => n *n;
console.log(square(4))
//callbacks


