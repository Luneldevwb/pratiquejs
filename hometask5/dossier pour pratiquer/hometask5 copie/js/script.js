let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    prompt = document.querySelector('#prompt'),
    menuItemLi = document.createElement('li');
menu.insertBefore(menuItem[2], menuItem[1]); //on commence d'abord par le nouveau element  puis l'ancien.


menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый пункт';
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('../img/apple_true.jpg')";