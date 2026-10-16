//global 
const appname = "campusevent";
function showApp(){
    console.log(appnamee);
}
showApp()
//function scope
function registerStudent() {
    const studentnames = "Maya";
    console.log(studentnames);
}
registerStudent();
//block scope
if(true){
    let room = "lab 2";
    const seats = 30;
    var building = "Main block";
    console.log(room, seats);
}
console.log(building)
// lexical 
const campus = "North Campus";
function showCampus(){
    const campbuilding = "library";
    function showcampbuilding(){
        console.log(campus, campbuilding);
    }
    showcampbuilding();
}
showCampus();

//closure
function makegreeting(name){
    return function(){
        console.log("hello,"+name);
    };
}
const greetMaya = makegreeting("maya");
greetMaya();
