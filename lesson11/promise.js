// let drink = 0;


// function shoot(arrow, headshot, fail) {
//     console.log('Tu as tiré...');

//     setTimeout(function(){
//         Math.random() > .5 ? headshot({}) : fail('Tu as raté'); 
//     }, 3000);
// };

// function win() {
//     console.log('Tu as gagné!');
//     (drink == 1) ? buyBeer() : giveMoney();
// };

// function buyBeer() {
//     console.log('Tu as gagné une biere!');
// };

// function giveMoney() {
//     console.log('Tu as gagné une bonne somme!');
// };

// function loose() {
//     console.log('Tu as perdu!');
// };

// shoot({},
    
//     function(mark) {
//         console.log('Tu as touché la cible!');
//         win(mark, buyBeer, giveMoney);
//     },
//     function(ratez) {
//         console.error(ratez);
//         loose();
//     }
// );

//Methode POMISE 

let drink = 0;


function shoot(arrow) {
    console.log('Tu as tiré...');

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject('Tu as raté'); 
        }, 3000);  
    }); 
    return promise;
};

function win() {
    console.log('Tu as gagné!');
    (drink == 1) ? buyBeer() : giveMoney();
};

function buyBeer() {
    console.log('Tu as gagné une biere!');
};

function giveMoney() {
    console.log('Tu as gagné une bonne somme!');
};

function loose() {
    console.log('Tu as perdu!');
};

shoot({})
    .then(mark => console.log('Tu as touché la cible!'))
    .then(win)
    .catch(loose)

