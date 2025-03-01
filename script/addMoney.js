document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();
    let amount = document.getElementById('amount-number').value;
    let pin = document.getElementById('pin-number').value;
    console.log(document.getElementById('bank-name').value);
    if(document.getElementById('bank-name').value === 'Select a bank') {
        alert('Enter Bank');
        return;
    }
    if(amount === '') {
        alert('Enter amount');
        return;
    }
    if(document.getElementById('account-number').value.length !== 11) {
        alert('Invalid account number');
        return;
    }
    if(pin === '1234') {
        let balance = document.getElementById('balance').innerHTML;
        balance = parseInt(balance);
        balance += parseInt(amount);
        document.getElementById('balance').innerHTML = balance;
        makeTransection(amount, balance, 'Add Money');
        alert('Money added successfully');
    } else {
        alert('Invalid pin');
    }
})

