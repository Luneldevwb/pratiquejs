//Динамическая типизация в JS
//Это возможность одного типа данных преващаться в другой.Например число может стать стракой и наоборот.
//Массив это специальный объект который имеет другой синтаксис.

//-to string(transformer un elemnt en string)
//Methode 1

// console.log(typeof(String(null)));



//Получение элементов со страницы(Methodes pour obtenir les elements)
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),// c'est la methode la plus populaire.Elle est ensemble la methode forEach pour ranger les elememts. On peut utiliser un element parent suivi de son fils,il n y aura pas d'erreur.
    wrapper = document.querySelector('.wrapper'),
    oneHeart = document.querySelector('.heart');

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[1]);
// console.log(oneHeart);

//APPRENDRE A STYLISER LES ELEMENTS DEPUIS Js
box.style.backgroundColor = 'blue';
box.style.width = '150px';
box.style.height = '150px';
box.style.padding = '20px';
box.style.marginBottom = '20px';
circle[0].style.backgroundColor = 'green';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'red';





//utilser un cylce pour attenidre tout les elements du selecteur.
for( let i = 0; i < btn.length; i++ ) {
    btn[i].style.width = '75px';
    btn[i].style.height = '40px';
    btn[i].style.backgroundColor = '#b7dba6';

}
//Ou la methode forEach
// heart.forEach(function(items, i, hearts) {
//     items.style.backgroundColor = 'orange';
// });

//Creation d'element depuis JS
let div = document.createElement('div'),
    text = document.createTextNode('I was here!'); //Creation d'1 texte sans tag.
div.classList.add('black');
// document.body.appendChild(div); // pour ajouter un elemnt au bas de la lignee parentale.
wrapper.appendChild(div);

div.style.width = '100px';
div.style.height = '20px';
div.style.backgroundColor = '#54cbcb';
div.style.marginTop = '20px';

//Ajouter un texte ou code html dans une page

// div.innerHTML = '<h1>Hello world!</h1>';
div.textContent = 'Hello world!' //pour ajouter text venant de l'exterieur,afin de preserver le code initial on utilise cette methode.



// document.body.insertBefore(div, circle[0]); //ajouter un element devant un autre,on met le nom de l'elmt qu'on veut ajouter + celui devant lequel on veut acoompagner de son indice.
// wrapper.insertBefore(div, heart[0]);

//Supprimer un element
// document.body.removeChild(circle[0]);

//Remplacer un element dans le document html
// document.body.replaceChild(btn[2], circle[2]) 









