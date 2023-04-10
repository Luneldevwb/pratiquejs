let startBtn = document.getElementById('start'),
    BudgetValue = document.getElementsByClassName('budget-value')[0],
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
    yearValue = document.querySelector('.year'),
    monthValue = document.querySelector('.month'),
    dayValue = document.querySelector('.day');


    let money, time;

    function start() {
        money = +prompt("Ваш бюджет на месяц?", "");
        time = prompt("Введите дату в формате YYYY-MM-DD");
    
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", "");
        }
    };
    
    start();
    
        
    let appData = {
        budget : money,
        timeData : time,
        expenses : {
            "ответ на первый вопрос" : "ответ на второй вопрос"
        },
        optionalExpenses : {1 : "ответ на вопрос"},
        income : [],
        savings : true,
        //creation methode 
        chooseExpenses: function() {
            for(let i = 0; i < 2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                    b = prompt("Во сколько обойдется?", "");
                if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
                    console.log('Done!');
                    appData.expenses[a] = b;
                } else {
                    console.log("bad result");
                    i--;
                }
            };
        },
    
        detectDayBudget: function() {
            appData.moneyPerDay = (appData.budget / 30).toFixed(2);//pour arrondir la reponse
            alert("Бюджет на 1 день составляет: " + appData.moneyPerDay  + "руб.");
        },
    
        detectLevel: function() {
            if(appData.moneyPerDay < 100) {
                console.log("Это минимальный уровень достатка"); 
            } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log("Это средний уровень достатка");
            } else if(appData.moneyPerDay > 2000) {
                console.log("Это высокий уровень достатка");
            } else {
                console.log("Произашла ошибка");
            }
        },
        
        checkSavings: function() {
            if(appData.savings == true) {
                let save = +prompt("Какова сумма накоплений ?"),
                    percent = +prompt("Под кaкой процент?");
                
                appData.monthIncome = (save/100/12*percent).toFixed(2);
                alert("Доход в месяц с вашего депозита составляет: " + appData.monthIncome + "руб.")
        
            }
        },
    
        chooseOptExpenses: function () {
            for(let i = 0; i < 3; i++) {
                let questionOptExpenses = prompt("Статья необязательных расходов?", "");
                appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData.optionalExpenses);
            };
        },
    
        chooseIncome: function() {
            let items = prompt('Что принесет дополнительный доход ? (Перечислить через запятую)', '');
            if( typeof(items) !== 'string' || items == '' || typeof(items) == null ) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
            } else {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то ещё?'));
                appData.income.sort();
            }
    
            appData.income.forEach(function(itemsmass, i) {
                alert('Способы доп. заработка: ' + (i+1) + ' - ' + itemsmass)
            });
            for(let key in appData) {
                console.log('Наша программа включает в себя данные: ' +key+ ' - ' + appData[key] );
            }
        }
    
    
    };
    



