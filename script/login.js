document.getElementById('btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    let accountNumber = document.getElementById('account-number').value;
    let pin = document.getElementById('pin-number').value;
    console.log(accountNumber, pin);
    if(accountNumber.length === 11 ) {
        if(pin === '1234') {
            window.location.href = 'dashboard.html';
        }
    } else {
        alert('Account number must be 11 digits');
    }
});