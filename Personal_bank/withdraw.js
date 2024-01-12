document.getElementById('button-Withdraw').addEventListener('click', function () {

    const total_Amount = document.getElementById('total_balance');
    const total_Amount_previous = total_Amount.innerText;
    const float_total_Amount = parseFloat(total_Amount_previous);

    const pre_withdraw = document.getElementById('previous_Withdraw');
    const text_pre_withdraw = pre_withdraw.innerText;
    const float_pre_withdraw = parseFloat(text_pre_withdraw);

    const enter_withdraw = document.getElementById('input_Withdraw');
    const value_enter_withdraw = enter_withdraw.value;
    const float_enter_withdraw = parseFloat(value_enter_withdraw);

    enter_withdraw.value = '';

    if (float_total_Amount < float_enter_withdraw) {
        alert('Sorry your amount is not valid');
        return;
    }

    const total_withdraw = float_pre_withdraw + float_enter_withdraw;
    pre_withdraw.innerText = total_withdraw;



    total_Amount.innerText = float_total_Amount - float_enter_withdraw;


})