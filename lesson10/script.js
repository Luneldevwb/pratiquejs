
// Выведите на экран правильное сообщение, которое берет значение из input
// let age = document.getElementById('age');
// function showUser(surname, name) {
// alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
// console.log(showUser.apply(age, ['Nzaou','Lunel']));

// Стандарт ES6. Интерполяция

let name = 'Lune',
    age = 30,
    mail = 'email@getMaxListeners.com';

document.write(`User ${name} ${age} years old. His adresse email: ${mail}`);

// ES6. let и const
function makeArray() {
    var items = [];
    
    for (let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

// ES6. Стрелочные функции

let fun = () => {
    console.log(this);
};
// fun();

let obj = {
    number : 4,
    sayNumber : function() {
    let say = () => {
        console.log(this); // Стрелочные функции нет своего контеста она всегда его берет у своего родителя.Они всегда анонимные 
    };
    say();
    }
};
obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});

// ES6. Параметры по умолчанию

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; // pour mettre un parametre par defaut(ancinne version ES5) 

    //ES6 on met directement le parametre dans l'argument de la fonction
    console.log(number*basis);
}
calcOrDouble(2,2);
calcOrDouble(5);

// ES6. Классы

class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width; 
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10);
console.log(square.calcArea());

//ES6. Spread-операторы
let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; // pour afficher directemnent  les elts du massive video et blogs on va utiliser le spread operateur en ajoutant ... video et blogs


console.log(internet); 

function log(a, b, c) {
    console.log(a); 
    console.log(b); 
    console.log(c); 
    console.log(a + b + c); 

}
let numbers = [2, 5, 7];
log(...numbers); 
