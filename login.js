const checking = window.localStorage.getItem('login');
if (checking) {
    document.getElementById('bank').style.display = 'block';
    document.getElementById('loginPage').style.display = 'none';

}
else {
    document.getElementById('bank').style.display = 'none';
}

let input = document.getElementById('password_input').value;
if (input === '') {
    document.getElementById('login').style.display = 'none';
}

function createPassword() {
    let input = document.getElementById('password_input');

    if (input.value.length == 0) {
        window.alert("Please Enter Valid Password")
    }
    else {
        window.localStorage.setItem("Password", input.value);
        input.value = '';
        document.getElementById('login').style.display = 'block';
        document.getElementById('createPass').style.display = 'none';
    }

}

function login() {
    const password = window.localStorage.getItem('Password');
    let loginInput = document.getElementById('login_input');
    if (loginInput.value !== password) {
        window.alert("Password Not Matched");
    }
    else {
        window.localStorage.setItem("login", loginInput.value);
        window.alert("Password Matched");
        document.getElementById('bank').style.display = 'block';
        document.getElementById('loginPage').style.display = 'none';
    }
}