//События и их обработчики
//onclick="alert('You click on 1 button')" ce n'est pas recommende d'utiliser directement le script dans html


// let btn = document.querySelectorAll('button'),
//     wrap = document.querySelector('.wrapper'),
//     link = document.querySelector('a'); 

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

// link.addEventListener('click', function(event) {
//     event.preventDefault();//pour annuler les parametres par defauts des navigateurs
//     console.log('Event was done: ' + event.type + ' on element ' + event.target);
// });

//pour utiliser tout les elements aussitot
// btn.forEach(function(item) {
//     item.addEventListener('mouseleave', function() {
//         console.log('Log out!');
//     });
// });

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

// События на мобильных устройствах и основы регулярных выражений
// les event qu'on utilise pour la version mobile 
// touchstart(declencheur d'event), touchmove(des mvts avec notre doigts sur un elemt qlqconque de la page),touchend(lorsqu'on enleve notre sur l'ecran), touchenter(le fait d'ouvrir elemt dans la page), touchleave(le fait de quitter sur un elemt), touchcancel(le fait d'annuler)

window.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('#btn');

    // btn.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     console.log('first button: touchstart');
    //     console.log(e.target); //target(permet de suivre le comportemnt d'un element)
    //     console.log(e.touches[0].target);
    //     console.log(e.touches);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);

    // });

    btn.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log('first button: ' + e.touches[0].pageX);//pour avoir les coordonees d'axe ox
    });

    // btn.addEventListener('touchend', function(e) {
    //     e.preventDefault();
    //     console.log('first button: touchend');
    // });

    //Les bases des expressions régulières
    // regexp = new RegExp('pattern', 'flags'); //sa creation 1ere methode,longue
    // regexp = /pattern/flags; //sa creation 2eme methode,courte.
    // flags: 
    // i (caracters majuscule ou miniscule)
    // g (chercher d'une maniere globale)
    // m (plusieures lignes)
    // \d si on veut chercher des chiffres.le cas contraire on met \D
    // \w si on des lettres  le cas contraire on met \W
    // \s si on veut chercher les espaces le cas contraire on met \S

    // let ans = prompt('Write your name');

    // let reg = /n/gi;
    // // console.log(ans.search(reg));//methode search pour des expressions régulières
    // console.log(ans.match(reg));//Permet d'avoir plus d'infos par rapport a search
    // console.log(reg.test(ans));//methode search pour des expressions régulières

    // let pass = this.prompt('Write your password');

    // console.log(pass.replace(/./g, "*"));//la 3e methode replace pour les expressions regulieres. Le point represente un symbole particulier 
    // this.alert('12-12-12'.replace(/-/g, ":"));

    // let ans = prompt('Write your number');

    // let reg = /\d/g;
    // console.log(ans.match(reg));


    let str = 'My name is $ R1R9';
    console.log(str.match(/\$/i));//pour chercher des symbiles on utilise \ pour faire au slash habituel
});