localStorage.setItem("theme","dark");
const savedTheme = localStorage.getItem("theme");
console.log(savedTheme);
sessionStorage.setItem("step","2");
const savedStep = sessionStorage.getItem("step");
//save an array using json
const task = ["red",  "practise"];
localStorage.setItem("task", JSON.stringify(task));
const savedText = localStorage.getItem("task");
const savedTasks = JSON.parse(savedText);
console.log(savedTasks[0]);
//favorite color
localStorage.setItem("color","purple");
const savedcolor = localStorage.getItem("color");
console.log(savedcolor);
//temporary step
sessionStorage.setItem("step","2");
const savedstep = sessionStorage.getItem("step");
//three book titles
const book = ["physics","chemistry"];
localStorage.setItem("book", JSON.stringify(book));
const saveText = localStorage.getItem("book");
const savedbook = JSON.parse(saveText);
console.log(savedbook);

