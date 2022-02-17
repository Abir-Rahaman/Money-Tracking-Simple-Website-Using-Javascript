document.getElementById('calculate-btn').addEventListener('click',function(){  
    
    GetTotal()  //calling the function
})

// food , rent , cloth total handling using by one function

var flag = 0;

function getValue(amount){
  
   const totalInput = document.getElementById(amount);
   
   let totalValue = parseFloat(totalInput.value) ;

   //error handling  
   if(totalValue >= 0)
   {
       return totalValue;
   }
   else{
       flag = 1;
       alert(amount+' is not valid.')
       return 0;
   }

}

function GetTotal(){

   const food = getValue('food');
   const rent = getValue('rent');
   const cloth = getValue('cloth');

   const totalAmount = parseFloat(food+rent+cloth) ;
   const totalExpenses =document.getElementById('total-expenses');
   
   const income = document.getElementById('income'); 
   const balance = income.value - totalAmount;
   const balanceText = document.getElementById('balance');

    //error handling
   if(balance<0)
   {
       alert('your income is lesser then your income');
       flag = 1;
   }
   if(flag!=1)
   {
       totalExpenses.innerText = parseFloat(totalAmount);
       balanceText.innerText = balance;
   }
}

// Saving Amount & Remaining Balance section

document.getElementById('saving-btn').addEventListener('click',function(){
   const saveValue = getValue('saving-field');

   //error handling
   if(saveValue>100)
   {
       alert('you can not save more than 100%')
       flag = 1;
   }

   const incomeValue = getValue('income');

   const savingAmount = (incomeValue * saveValue)/100 ;

   const totalSaving = document.getElementById('saving-amount');
   
   const remainingAmount =  document.getElementById('remaining-amount');
   const remainingAmountValue = savingAmount - balance.innerText;

   //error handling
   if(flag!=1)
   {
       remainingAmount.innerText = parseFloat(remainingAmountValue) ;
       totalSaving.innerText = savingAmount;

   }
   console.log(remainingAmountValue)
 
});


