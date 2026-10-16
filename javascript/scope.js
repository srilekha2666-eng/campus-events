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