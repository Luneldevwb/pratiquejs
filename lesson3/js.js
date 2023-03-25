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

function done() {
    console.log("3rd lesson done!")
}
learnJs("Javascript", done);

//OU

// learnJs("Javascript", function() {
//     console.log("3rd lesson done!")
// })

function nomination(name, Callback) {
    console.log("I'm " + name);
    Callback();
}
// function appelation() {
//     console.log("Nice to meet you!");
// }
// nomination("Lunel", appelation);
 
//Ou
nomination("Lunel", function() {
    console.log("Nice to meet you!");
});

//PRACTICE WITH OBJECT

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};
console.log(options.width);
options.bool = false;  //ajouter un elt dans l'object.
options.colors = {
    border: "black",
    bg: "red"
};
console.log(options);

//Suppresion d'un element dans l'objet
delete options.bool; 

//Ranger les elements dans l'object
for (let key in options) {
    console.log('Свойствo ' + key  + ' имеет значение ' + options[key]);
}
//Determination de la longueur de l'object
console.log(Object.keys(options).length);

//Massives et pseudomassives

//METHODES
// let arr = ["first", 2, 3, "four", 5];
// arr[99] = 99; //c'est de ne pas donner un indexe fixe a array,car ca peut donner une erreur

// // arr.pop(); //permet de supprimer le dernier element de array
// // arr.push("5"); //permet d'ajouter un element dans array au dernier rang.
// // arr.shift(); //permet de supprimer le 1er elemnt
// // arr.unshift("6") //permet d'ajouter un element au debut de  array .
// console.log(arr.length); //on aura 100 car ca prend le dernier indexe plus 1.

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');

// }) //ici la function prend 3 arguments,mais selon le besoin.
// console.log(arr);

//nouvelle methode massive
// let mass = [1,2,4,6,7];
// for (let key in mass) {
//     console.log(key); //on aura juste les indexes et non les elemts de mass.
// }
// let mass = [1,2,4,6,7];
// for (let key of mass) {
//     console.log(key); //on aura les elemts de mass.
// }



//Ranger notre array
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// let arr = [1,15,3],
//     i = arr.sort(comparNum);
// function comparNum(a,b) {
//     return a-b;
// }
// console.log(arr);

// let ans = prompt("", ""),
//     arr = [];
// arr = ans.split(','); //pour ajouter un separateur et permet de transformer un string en massiv ex.une virgule,slash et autres
// console.log(arr);

// let arr = ['aaa', 2, 23, 'aaw'],
//     i = arr.join(', '); //pour ajouter un separateur et permet de transformer un massiv en string  ex.une virgule,slash et autres
// console.log(arr); // on aura juste le massiv 
// console.log(i); //on aura juste les elts de arr en string sans les []

let arr = [2,23,1,24, 'ycd', 'wer', 'zaw'],
    i = arr.sort(comparNum); //pour classer les elements par ordre alphabetique,mais avec les chiffres il faut ajouter une callback function.
function comparNum(a,b) {
    return a-b;
}
console.log(arr); 

//PSEUDOMASSIV n'a pas de methodes et proprietes

// Объектно-ориентированное программирование (ООП)
let soldier = {
    health: 400,
    armor: 1000
};

let mike = {
    health: 200
};

mike.__proto__ = soldier; //proto= prototype
console.log(mike);
console.log(mike.armor);
