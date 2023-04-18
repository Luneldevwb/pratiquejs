// On va utiliser Domcontentloaded par rapport a loaded simple,car il permet de tout charger et lancer le script meme tout les docs ne sont pas encore pret.

window.addEventListener('DOMContentLoaded', function() {
    // Ici qu'on ecrira le script de notre page.
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'), // si tu utilises getelemtbytagname il faut tjrs l'indice a la fin.
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');


        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    } 

    info.addEventListener('click', function(event) {

        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});