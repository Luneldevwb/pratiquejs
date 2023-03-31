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
    heart = document.querySelectorAll('.heart');// c'est la methode la plus populaire.Elle est ensemble la methode forEach pour ranger les elememts. On peut utiliser un element parent suivi de son fils,il n y aura pas d'erreur.
    oneHeart = document.querySelector('.heart')
console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]);
console.log(heart[1]);




