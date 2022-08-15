if (!window.localStorage.getItem('currentBalance')) {
    window.localStorage.setItem('currentBalance', 0);
}
if (!window.localStorage.getItem('diposite')) {
    window.localStorage.setItem('diposite', 0);
}
if (!window.localStorage.getItem('withdraw')) {
    window.localStorage.setItem('withdraw', 0);
}

function dipositeAmmount() {
    const dipAmnt = parseFloat(document.getElementById('diposite_input').value);
    const currDiposite = parseFloat(document.getElementById('diposite').innerText);
    const oldBalace = parseFloat(document.getElementById('currentBalance').innerText);
    if (dipAmnt <= 0) { document.getElementById('diposite_input').value = 0; window.alert("Please Input Valid Amount"); }
    else if (dipAmnt > 0) {
        document.getElementById('currentBalance').innerText = oldBalace + dipAmnt;
        document.getElementById('diposite').innerText = currDiposite + dipAmnt;
        window.localStorage.setItem('diposite', currDiposite + dipAmnt);
        window.localStorage.setItem('currentBalance', oldBalace + dipAmnt);
        document.getElementById('diposite_input').value = 0;
    }
}
function withrawAmmount() {
    const withAmnt = parseFloat(document.getElementById('withdraw_input').value);
    const currWithdraw = parseFloat(document.getElementById('withdraw').innerText);
    const oldBalace = parseFloat(document.getElementById('currentBalance').innerText);
    if (withAmnt <= 0) { document.getElementById('withdraw_input').value = 0; window.alert("Please Input Valid Amount"); }
    else if (withAmnt > 0) {
        if (withAmnt > oldBalace) {
            window.alert('You can not withdraw more than current balance');
            document.getElementById('withdraw_input').value = 0;
        }
        else if (withAmnt <= oldBalace) {
            document.getElementById('withdraw').innerText = currWithdraw + withAmnt;
            document.getElementById('currentBalance').innerText = oldBalace - withAmnt;
            window.localStorage.setItem('withdraw', currWithdraw + withAmnt);
            window.localStorage.setItem('currentBalance', oldBalace - withAmnt);
            document.getElementById('withdraw_input').value = 0;
        }
    }
}

document.getElementById('diposite').innerText = window.localStorage.getItem('diposite');
document.getElementById('withdraw').innerText = window.localStorage.getItem('withdraw');
document.getElementById('currentBalance').innerText = window.localStorage.getItem('currentBalance');
