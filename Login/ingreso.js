function togglePasswordVisibility() {
    var passwordField = document.getElementById('password');
    var toggleButton = document.getElementById('togglePassword');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'Ocultar Contraseña';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'Mostrar Contraseña';
    }
}