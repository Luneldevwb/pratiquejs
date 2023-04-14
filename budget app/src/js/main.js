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

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let questionOptExpenses = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
        console.log(appData.optionalExpenses);
    }
});

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed(); //pour arrondir la reponse
        dayBudgetValue.textContent =  appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Это минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Это средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Это высокий уровень достатка";
        } else {
            levelValue.textContent = "Произашла ошибка";
        }
    } else { 
        dayBudgetValue.textContent = "Произашла ошибка";
    }
   
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
}); //on peut aussi utiliser change a la place de input, mais input est mieux.

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else { appData.savings = true;}
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = (sum / 100 / 12 * percent);
        appData.yearIncome = (sum / 100 * percent);
        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value;
        appData.monthIncome = (sum / 100 / 12 * percent);
        appData.yearIncome = (sum / 100 * percent);
        monthSavingsValue.textContent =  appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent =  appData.yearIncome.toFixed(2);
    }
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
    savings: false
};