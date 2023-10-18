// Deposit input function 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText); 
    
        inputField.value = '';
        return amountValue;
        
    }

    // Withdraw function 
    function updateTotalField (totalFieldId, amount) {
        
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const newDepositTotal = previousTotal + amount; 
    totalElement.innerText = newDepositTotal;

    }
    function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const balanceTotalAmount = parseFloat(balanceTotalText); 
     return balanceTotalAmount;
    }
    
// Total Balance function
    
function updateBalance (amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    // const mainBalanceTotal = balanceTotalAmount + amount;
    // balanceTotal.innerText = mainBalanceTotal;
    const balanceTotalAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount + amount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - amount;
    }

}

document.getElementById('deposit-button').addEventListener('click', function () {
   
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-dlr', newDepositAmount);
    updateBalance(newDepositAmount, true);
    }
    


    // const depositTotal = document.getElementById('deposit-dlr');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);
    // const newDepositTotal = previousDepositAmount + newDepositAmount; 
    // depositTotal.innerText = newDepositTotal;
    
    

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    // const mainBalanceTotal = balanceTotalAmount + newDepositAmount;
    // balanceTotal.innerText = mainBalanceTotal;
    // depositInput.value = '';
    
})


// Event handler with withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
    
    
    // const withdrawInput = document.getElementById('withdraw-input');

    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount)
        updateBalance(newWithdrawAmount, false);
    }

    
    
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(previousWithdrawText);

    
    // const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    // withdrawTotal.innerText = newWithdrawTotal;

    

    // withdrawInput.value = '';
    // Totall Balance
    
    
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);

    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // balanceTotal.innerText = newBalanceTotal;

    
})

