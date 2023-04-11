//События и их обработчики
//onclick="alert('You click on 1 button')" ce n'est pas recommende d'utiliser directement le script dans html


let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a'); 

// btn[0].onclick = function() {
//     alert('You click on 1 button');
// };
// btn[0].onclick = function() {
//     alert('You again click on 1 button');
// }; 
//la 1ere fonction sera annulee,au profit de la nouvelle,pour eviter cela on utlise addeEventListner methode
//Evenemment click

// btn[0].addEventListener('click', function(event) {
//     // console.log(event);//pour savoir quels elements contient l'object.
//     // let target = event.target;
//     // target.style.display = 'none';// on peut utiliser target separement.
//     console.log('Event was done: ' + event.type + ' on element ' + event.target);
// });//pour savoir quel type d'evenements a ete realise.

// wrap.addEventListener('click', function() {
//     console.log('Event was done: ' + event.type + ' on element ' + event.target);
// });

link.addEventListener('click', function(event) {
    event.preventDefault();//pour annuler les parametres par defauts des navigateurs
    console.log('Event was done: ' + event.type + ' on element ' + event.target);
});

//pour utiliser tout les elements aussitot
btn.forEach( function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('Log out!');
    });
});

// btn[0].addEventListener('click', function() {
//     alert('You again click on 1st button');
// });


// btn[0].addEventListener('click', function(event) {
//     // console.log(event);//pour savoir quels elements contient l'object.
//     // let target = event.target;
//     // target.style.display = 'none';// on peut utiliser target separement.
//     console.log('Event was done: ' + event.type + ' on element ' + event.target);
// });//pour savoir quel type d'evenements a ete realise.

// wrap.addEventListener('click', function() {
//     console.log('Event was done: ' + event.type + ' on element ' + event.target);
// });

// btn[0].addEventListener('click', function() {
//     alert('You again click on 1st button');
// });



//Evenemment mouse
// btn[0].addEventListener('mouseenter', function() {
//     alert('You pointed on 1st button');
// });
