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
// let calc = (a,b) => a + b
// console.log(calc(2,4));
// console.log(calc(8,4));
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

//методы и своиства строк чисел: методы это вспомагательная функция,а своиства это вспомогательное значение. 
// let str = "test";
//  console.log(str.length);// своиства
//  console.log(str.toLocaleUpperCase()); //Methodes on met toujours les '()' a la fin.
//  console.log(str.toLocaleLowerCase());

// // let twelve = "12.1";
// // console.log(Math.round(twelve));

// let twelve = "12.5px";
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

///Callback fucntion
//это функция которая должна быть выполнена, после того как другая функция завершила его выполнение.

function first() {
    setTimeout( function() {
        console.log(1);}, 500);
}

function second() {
    console.log(2);
}
first();
second();

function learnJs(lang, Callback) {
    console.log("I learn " + lang);
    Callback();
}

learnJs("Javascript", function() {
    console.log("3rd lesson done!")
})



