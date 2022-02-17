document.getElementById('calculate-btn').addEventListener('click',function(){  
    
     GetTotal()  //calling the function
})

// food , rent , cloth total handling using one function

function getTotal(amount){
   
    let totalInput = document.getElementById(amount);
    let totalValue = parseFloat(totalInput.value) ;
    return totalValue;

}

function GetTotal(){
    let food = getTotal('food');
    let rent = getTotal('rent');
    let cloth = getTotal('cloth');
    let totalAmount = food+rent+cloth;
    let totalExpenses =document.getElementById('total-expenses');
    totalExpenses.innerText = parseFloat(totalAmount) ;

    const income = document.getElementById('income');

    const balance = income.value - totalAmount;

    const balanceText = document.getElementById('balance');

    balanceText.innerText = balance;
}

// Saving Amount & Remaining Balance section

document.getElementById('saving-btn').addEventListener('click',function(){

    const save = document.getElementById('saving-field');
    const saveValue = parseInt(save.value);
    const income = document.getElementById('income');
    const incomeValue = parseInt(income.value);

    const savingAmount = (incomeValue * saveValue)/100 ;

    const totalSaving = document.getElementById('saving-amount');
    totalSaving.innerText = savingAmount;
    
    const remainingAmount =  document.getElementById('remaining-amount');
    const remainingAmountValue = savingAmount - balance.innerText;
    remainingAmount.innerText = parseFloat(remainingAmountValue) ;
    console.log(remainingAmountValue)
  
})