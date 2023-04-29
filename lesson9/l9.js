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

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
    console.log(`Hello ${this.name}!`);
    }

    exit() {
        console.log(`User ${this.name} log out`);
    }
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);
console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();
ivan.exit();


