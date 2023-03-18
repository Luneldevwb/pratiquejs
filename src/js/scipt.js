let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD");
    
let appData = {
    budget : money,
    timeData : time,
    expenses : {
        "ответ на первый вопрос" : "ответ на второй вопрос"
    },
    optionalExpenses : {},
    income : [],
    savings : false 

};

//added cycle 
// for(let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
//         console.log('Done!');
//         appData.expenses[a] = b;
//     } else {
//         console.log("bad result");
//         i--;
//     }
// };

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
//         console.log('Done!');
//         appData.expenses[a] = b;
//     } else {
//         console.log("bad result");
//         i--;
        
//     }
//     i++;

// };

let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
        console.log('Done!');
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
        
    }
    i++;
}
while (i < 1);


appData.moneyPerDay = appData.budget / 30;


alert("Бюджет на 1 день составляет: " + appData.moneyPerDay  + "руб.");

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка"); 
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произашла ошибка");
}


// if (2 * 4 == 8) {
//     console.log('Vrai');
// } else {
//     console.log('Faux');
// }

//Les operateurs logiques

//let num = 50;
// if(num < 49) {
//     console.log('faux!')
// } else if(num > 100) {
//     console.log('Trop grand!')
// } else {
//     console.log('Vrai!')
// };

// (num == 50) ? console.log('Vrai!') : console.log('faux!');  //tertiaire

// switch(num) {
//     case num < 49:
//         console.log('faux!');
//         break;
//     case num > 100:
//         console.log('Trop grand!');
//         break;
//     case num > 90:
//         console.log('Encore trop grand!');
//         break;
//     case 50: //La version vraie doit etre sans le signe ==,pour ne pas avoir une erreur.
//         console.log('Vrai!')
//         break;
//     default:
//         console.log('Something was wrong!')
//         break;

// }

//Cyles

// let num = 50;
// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++;
// }
// while(num < 56);

// for(let i = 1; i < 8; i++) {
//     // if(i == 4) {
//     //     break;
//     // }
//     if(i == 4) {
//         continue;
//     }
//     console.log(i);
// }