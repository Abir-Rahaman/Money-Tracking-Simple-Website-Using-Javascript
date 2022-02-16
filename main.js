document.getElementById('calculate').addEventListener('click',function(){

    const food = document.getElementById('food');
    const foodValue = parseFloat( food.value);
    const rent = document.getElementById('rent');
    const rentValue =parseFloat(rent.value) ;
    const cloth = document.getElementById('cloth');
    const clothValue = parseFloat(cloth.value);

    const total =  foodValue+rentValue+clothValue;

    let Expenses = document.getElementById('total-expenses');

    Expenses.innerText = total;

    const income = document.getElementById('income');
    const incomeValue = parseFloat(income.value);

    const balance = incomeValue - total;

    const balanceText = document.getElementById('balance');

    balanceText.innerText = balance;
})