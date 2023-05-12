// Constructors and classes = nous permet de creer des elements de mm types par expl des articles pour une boutique en ligne,des videos,ou nouvel utilisateur du site.
// Etant donne que cette une fonction elle peut avoir une propriete et methode.
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true,
//     this.hello = function() {
//         console.log('Hello ' + this.name + '!');
//     }
// }

// // Pour transferer les proprietes aux descendants

// User.prototype.exit = function(name) {
//     console.log('User ' + this.name + ' log out');
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);
// console.log(ivan);
// console.log(alex);

// ivan.exit();


// Nouveaux standarts ES6

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//     console.log(`Hello ${this.name}!`);
//     }

//     exit() {
//         console.log(`User ${this.name} log out`);
//     }
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);
// console.log(ivan);
// console.log(alex);

// ivan.hello();
// alex.hello();
// ivan.exit();

// Context d'appel (this)

//'use strict'; 

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);

// let obj = {
//     a: 20,
//     b: 25,
//     sum: function () {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// let user = {
//     name: 'John'
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name  + surname);

// }
// console.log(sayName.call(user, 'Smith')); //4. methode permettant d'appler manuellement la fonction.on lie parametre sous de string

// console.log(sayName.apply(user, ['Double'])); // methode permettant d'appler manuellement la fonction.on lie parametre sous de massive.  S'il y d'elemts a ajouter c'est mieux d'utiliser  la methode apply

// function count(number) {
//     return this * number;
// }

// let double  = count.bind(2); // methode permettant d'appler manuellement la fonction.  
// console.log(double(2));
// console.log(double(3));

// contexte de l'appel le cas du doc entier
let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'blue';
    function showThis() {
        console.log(this);//toutes fonctions incluses dans une autre avec this nous donnera window dans la console.
    }
    showThis() ;
})


// Variantes pour faire appel a la fonction 
// 1. la console ne va pas afficher window comme reponse, mais undefined car ca fait partie des nouveaux standarts ES6. 
// 2. Methode object- this egal object 
// 3. constructor (new) - this = nouvel object cree.
// 4. указание конкретного контекста- call, apply, bind 