//Function
// let num = 20;
// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
// console.log(num);

// }   //замыкание
// showFirstMessage("Hello world");
// console.log(num);  

//function declaration
// function calc(a, b) {
//     return(a + b);
// } 

// console.log(calc(2,4));
// console.log(calc(8,4));  //function declaration,les demandes peuv etre faites avant ou apres la funnction mere.

//Function le standart EMAC6
let calc = (a,b) => a + b
console.log(calc(2,4));
console.log(calc(8,4));
//on peut ou ne pas mettre les accolades si c4est une petite function.
//function expression

// let calc = function (a, b) {
//     return(a + b);
// } 
// console.log(calc(2,4)); //les demandes se font apres la funnction mere.
// console.log(calc(8,4)); //les demandes se font apres la funnction mere.


// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);