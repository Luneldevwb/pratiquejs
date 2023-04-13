let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();// si on a des input on utilise value et non texteContent
    monthValue.value =  new Date(Date.parse(time)).getMonth() + 1; //on a ajoute +1 parce qu'en js on commencer a partir de zero,or zero n'existe voila pourquoi.
    dayValue.value =  new Date(Date.parse(time)).getDate();

});

expensesItemBtn.addEventListener('click', function() {
    let sum = 0;
    // a la place de 2 on mettra le nom de la classe des inputs pour eviter que ca soit fixe.
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;// on a ajoute ++i pour obtenir directemnt la valuer de i
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('Done!');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            // console.log("bad result");
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
        
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        "ответ на первый вопрос": "ответ на второй вопрос"
    },
    optionalExpenses: {
        1: "ответ на вопрос"
    },
    income: [],
    savings: true,
    //creation methode 
   

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2); //pour arrondir la reponse
        alert("Бюджет на 1 день составляет: " + appData.moneyPerDay + "руб.");
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка");
        } else {
            console.log("Произашла ошибка");
        }
    },

    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений ?"),
                percent = +prompt("Под кaкой процент?");

            appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
            alert("Доход в месяц с вашего депозита составляет: " + appData.monthIncome + "руб.");

        }
    },

    
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },

    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход ? (Перечислить через запятую)', '');
        if (typeof (items) !== 'string' || items == '' || typeof (items) == null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то ещё?'));
            appData.income.sort();
        }

        appData.income.forEach(function (itemsmass, i) {
            alert('Способы доп. заработка: ' + (i + 1) + ' - ' + itemsmass);
        });
        for (let key in appData) {
            console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
        }
    }


};