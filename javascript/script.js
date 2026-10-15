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

let number =5 ;
do {
    console
}

// for of and for in
const events = ["Talk", "Workshop", "Hackthon"];
for (const event of events){
    console.log(event);
}
const student = {name : "Maya"};
for (const key in student)
    console.log(Key, student[key]);

//print your name, course and a number using console.log()
console.log("name:Srilekha");
console.log("dep:csbs");
console.log("number:10");

// variable for an event name
let event name= "tech fest";
let ticket price =250;
let seatsLeft= 3;
console.log("event name");
console.log("ticket price");
console.log("seats left");
//cal the total price 
