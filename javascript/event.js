
//task 5
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
//task6
console.log("start");//callstack and exectue
setTimeout(() => console.log("Timer"),0);//web Api and check time and it go to the macro process 
Promise.resolve().then(() => console.log("promise"));//callback and next it go to the miocro process and print
console.log("Finish...");//callstack and exectue