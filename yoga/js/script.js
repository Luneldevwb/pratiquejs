// On va utiliser Domcontentloaded par rapport a loaded simple,car il permet de tout charger et lancer le script meme tout les docs ne sont pas encore pret.

window.addEventListener('DOMContentLoaded', function() {
    // Ici qu'on ecrira le script de notre page.
    'use strict';
    // L'activation des tabs dans une page.
    // 1ere etape on obtient les elemts par selector et selectorAll
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'), // si tu utilises getelemtbytagname il faut tjrs l'indice a la fin.
        tabContent = document.querySelectorAll('.info-tabcontent');
    

    // 2e etape on cree ue fonction ayant un cycle permetant de cacher le contenu des tabs
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');


        }
    }
    hideTabContent(1);

    // 3e etape on cree ue fonction ayant une condition permetant d'afficher le contenu des tabs
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    } 

    // 4e etape on cree ue fonction ayant un cycle de cacher et d'afficher le contenu des tabs tout en precisant le tab selectionner avec les paarametres target et event.
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

// Создаем таймер обратного отсчета на сайте

// 1ere etape on cree une date limite    
let deadline = '2023-10-21';

// 2 etape on cree une qui nous permet d'obtenir et l'envoyer au span correspondant.

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes =  Math.floor((t/1000/60) % 60),
        hours =  Math.floor((t/(1000*60*60)));
        //hours =  Math.floor((t/1000/60/60) % 24) //les heures
       // days = Math.floor((t/(1000*60*60*24))) //pour les jours
}

});

