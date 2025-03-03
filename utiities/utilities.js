function checkPin(pinId) {
    let pin = document.getElementById(pinId).value;
    if (pin === 1234) {
        return true;
    } else {
        alert('Invalid pin');
        return false;
    }
}

function checkAccountNumber(accountNumberId) {
    let accountNumber = document.getElementById(accountNumberId).value;
    if (accountNumber.length !== 11) {
        alert('Invalid account number');
        return false;
    } else {
        return true;
    }
}

function makeTransection(amount, balance, event) {
    let tran = document.createElement('div');
    tran.className = 'transection-item bg-slate-100 m-2 p-2 rounded-3xl ';
    date = new Date();
    date = date.toDateString();
    tran.innerHTML = `
        <p>Amount: ${amount}</p>
        <p>Balance: ${balance}</p>
        <p>Transection Type: ${event}</p>
        <p>Transection Date: ${date} </p>
    `;
    document.getElementById('transection-cont').prepend(tran);
}

function logout() {
    window.location.href = 'index.html';
}