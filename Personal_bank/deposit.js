
document.getElementById('button-Deposit').addEventListener('click', function () {
    const previousDeposit1 = document.getElementById('previous_deposit');
    const previousDeposit = previousDeposit1.innerText;
    const floatPreDeposit = parseFloat(previousDeposit);

    const takeDeposit = document.getElementById('input_Deposit');
    const depositValue = takeDeposit.value;

    const floatDepositValue = parseFloat(depositValue);

    const totalDeposit = floatPreDeposit + floatDepositValue;
    previousDeposit1.innerText = totalDeposit;

    const total_Amount = document.getElementById('total_balance');
    const total_Amount_previous = total_Amount.innerText;
    const float_total_Amount = parseFloat(total_Amount_previous);

    total_Amount.innerText = float_total_Amount + floatDepositValue;



    takeDeposit.value = '';

})