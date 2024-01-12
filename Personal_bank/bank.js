document.getElementById('button-login').addEventListener('click',function(){
    const your_email = document.getElementById('input_email');
    const temp1 = your_email.value;
    const your_password = document.getElementById('input_password');
    const temp2 = your_password.value;

    if(temp1 === 'iqbal@gamil.com' && temp2 === '123' ){
        window.location.href = 'banknextpage.html';
    }
    else{
        alert('Enter wrong input');
    }

})