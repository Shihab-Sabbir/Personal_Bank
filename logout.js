function logout() {
    window.localStorage.removeItem('Password');
    window.localStorage.removeItem('login');
    location.reload();
}