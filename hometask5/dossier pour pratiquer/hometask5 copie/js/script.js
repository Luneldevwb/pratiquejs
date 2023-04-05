let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    promptforApple = document.querySelector('#prompt'),
    menuItemLi = document.createElement('li');
menu.insertBefore(menuItem[2], menuItem[1]); //on commence d'abord par le nouveau element  puis l'ancien.

menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый пункт';
menu.appendChild(menuItemLi);


document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.textContent = 'Мы продаем только подлинную технику Apple';
adv.remove();
let yourOpinion = prompt('Как вы думаете насчет наших продуктов?', '');
promptforApple.textContent = yourOpinion;