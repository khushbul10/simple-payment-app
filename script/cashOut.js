document.getElementById('btn-cash-out').addEventListener('click', function (e) {
    e.preventDefault();
    let amount = document.getElementById('cash-out-amount').value;
    let pin = document.getElementById('co-pin-number').value;
    let balance = document.getElementById('balance').innerHTML;
    balance = parseInt(balance);

    if (document.getElementById('agent-number').value.length !== 11) {
        alert('Invalid agent number');
    }
    else if (amount === '' || parseInt(amount) > balance) {
        alert('Invalid amount');
    }
    else if (pin === '1234') {
        
        balance -= parseInt(amount);
        document.getElementById('balance').innerHTML = balance;
        makeTransection(amount, balance, 'Cash Out');
        alert('Cash out successfully');
    } else {
        alert('Invalid pin');
    }
})