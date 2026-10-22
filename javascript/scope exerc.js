// create a global campusname and print it from inside a function (task 1_)
const campusName = "Tech Campus";
function showCampusName() {
  console.log(campusName);
}
showCampusName(); 


//block function (task 2)
if(true){
    let classroom = "section A"
    const seats = 20;
    var building = "main block";
    console.log(classroom, seats);
}
console.log(building);


//predict var and let behaviour when logged before declaration. run example separetly (task 3)
console.log("Value of a:", a); 
var a = 10;
console.log("Value of a after declaration:", a); 

//create makecounter() with   private counter variable and return a function that icrements it.(task 4)
function makeCounter() {
  let count = 0; 
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 


