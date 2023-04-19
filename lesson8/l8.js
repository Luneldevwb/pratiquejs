//Скрипты и время их выполнения. setTimeout и setInterva
// let timeId = setTimeout(sayHello, 3000); //ca permet de lancer la fonction aprs une duree donnee.

// clearTimeout(timeId); // ca permet d'arreter la methode setTimeout
// function sayHello() {
//     alert('Hello world!');
// }

// let timeId = setInterval(sayHello, 3000); //ca permet de lancer la fonction aprs une duree donnee par intervalle.

// clearTimeout(timeId); // ca permet d'arreter la methode setTimeout
// function sayHello() {
//     console.log('Hello world!');
// }

//fonction recursive 
// let timeId = setTimeout(function log() {
//     console.log('Hello!');
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    box = document.querySelector('.elem');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';

        }
    } 
}
btn.addEventListener('click', myAnimation);

//Methode par delegation
let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');
btnBlock.addEventListener('click', function(event) {
    // if ( event.target && event.target.tagName == "BUTTON") {
    //     console.log('Salut!');
    // } //Methode par delegation avec tout les elements.

        // if ( event.target && event.target.classList.contains('first')) {
        //     console.log('Salut!');
        // }  //Methode par delegation en ciblant juste un seul element par rapport a sa classe.

        if ( event.target && event.target.matches('button.first')) {
            console.log('Salut!');
        } //Methode par delegation en ciblant juste un seul element par rapport a sa classe avec la methode matches.
});  