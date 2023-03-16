// let money = prompt("Ваш бюджет на месяц?", ""),
//     time = prompt("Введите дату в формате YYYY-MM-DD");
    
// let appData = {
//     budget : money,
//     timeData : time,
//     expenses : {"ответ на первый вопрос" : "ответ на второй вопрос"
//     },
//     optionalExpenses : {},
//     income : [],
//     savings : false 

// };

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", "")
//     a2 = prompt("Во сколько обойдется?", ""),
//     a3 = prompt("Введите обязательную статью расходов в этом месяце", "")
//     a4 = prompt("Во сколько обойдется?", "");

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

// alert(appData.budget / 30);

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

let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}