document.getElementById('calculate-btn').addEventListener('click',function(){

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


document.getElementById('saving-btn').addEventListener('click',function(){

    const save = document.getElementById('saving-field');
    const saveValue = parseInt(save.value);
    const income = document.getElementById('income');
    const incomeValue = parseInt(income.value);

    const savingAmount = (incomeValue * saveValue) /100  ;

    const totalSaving = document.getElementById('saving-amount');
    totalSaving.innerText = savingAmount;
    
    const remainingAmount =  document.getElementById('remaining-amount');
    const remainingAmountValue = savingAmount - balance.innerText;
    remainingAmount.innerText = parseFloat(remainingAmountValue) ;
    console.log(remainingAmountValue)
  
})