document.getElementById('deposit-button').addEventListener('click', function () {
    
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);



    const depositTotal = document.getElementById('deposit-dlr');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);


    const newDepositTotal = previousDepositAmount + newDepositAmount; 
    depositTotal.innerText = newDepositTotal;



    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);


    const mainBalanceTotal = balanceTotalAmount + newDepositAmount;
    balanceTotal.innerText = mainBalanceTotal;

    depositInput.value = '';

})


// Event handler with withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
    
    
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);


    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    withdrawInput.value = '';
    // Totall Balance
    
    
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;




   


})

