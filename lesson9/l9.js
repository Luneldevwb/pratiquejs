//Параметры документа, окна и работа с ними/ parametres du document,de la fenetre(window) et leur utilisation.

let box = document.querySelector('.box'),
    btn = document.querySelector('.btn');

let width = box.clientWidth, // pour avoir la valeur de  la largeur en prenant en compte les padding. on ne met pas de parentheses car c'est une propriete.
    height = box.clientHeight;// pour avoir la valeur de  l'hauteur en prenant en compte les padding. 

//let width = box.offsetWidth, // pour avoir la valeur de  la largeur en prenant en compte tout les parametres(border,padding,scroll). on ne met pas de parentheses car c'est une propriete.
//height = box.offsetHeight;// pour avoir la valeur de  l'hauteur en prenant en compte tout les parametres(border,padding,scroll(pas la totalité)). 

// let width = box.scrollWidth, // pour avoir la valeur de  la largeur en prenant en compte tout les parametres(border,padding,scroll). on ne met pas de parentheses car c'est une propriete.
//     height = box.scrollHeight;// pour avoir la valeur de  l'hauteur en prenant en compte tout les parametres(border,padding,scroll( la totalité)). 
console.log(width);
console.log(height);
//console.log(box.getBoundingClientRect()); //pour obtenir les coordonnees d'un elmt.
//console.log(box.getBoundingClientRect().left); //pour obtenir une coordonnees specifique d'un elmt.
console.log(document.documentElement.clientWidth);//pour les coordonnees de notre document(la largeur)
console.log(document.documentElement.clientHeight);

console.log(document.documentElement.scrollTop);

//OU  

document.documentElement.scrollTop = 0; //C'EST UNE PROPRIETE TRES UTILISEE DANS LA PRATIQUE.

//La methode scrollBy et scrollTo
scrollBy(0, 300); // ca prend deux coordonnees x et y,permet de scroller par rapport au point initial du scroll.
scrollTo(0, 300); // un plus utiliser par rapport a scrollBy permet de scroller par rapport au point initial(haut de la page) du scroll

btn.addEventListener('click', function() {
    //box.style.height = box.scrollHeight + 'px';// parce que cette propriete s'ecrit sans px,voila pourquoi on ajoute 'px' 
    //console.log(box.scrollTop);// pour voir combien on a deja parcouru depuis qu'on scoll vers le bas
    box.scrollTop = 0; // a chaque ca nous ramenera au debut content. l'un des parametres qu'on peut changer.  se
});
