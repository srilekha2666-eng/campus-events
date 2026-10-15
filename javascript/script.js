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