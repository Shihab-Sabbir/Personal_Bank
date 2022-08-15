
function dipositeAmmount() {
    const dipAmnt = parseFloat(document.getElementById('diposite_input').value);
    const currDiposite = parseFloat(document.getElementById('diposite').innerText);
    const oldBalace = parseFloat(document.getElementById('currentBalance').innerText);
    document.getElementById('currentBalance').innerText = oldBalace + dipAmnt;
    document.getElementById('diposite').innerText = currDiposite + dipAmnt;
    document.getElementById('diposite_input').value = '';
}
function withrawAmmount() {
    const withAmnt = parseFloat(document.getElementById('withdraw_input').value);
    const currWithdraw = parseFloat(document.getElementById('withdraw').innerText);
    const oldBalace = parseFloat(document.getElementById('currentBalance').innerText);
    document.getElementById('currentBalance').innerText = oldBalace - withAmnt;
    document.getElementById('withdraw').innerText = currWithdraw + withAmnt;
    document.getElementById('withdraw_input').value = '';
}
