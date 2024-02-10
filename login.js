const { parseJsonSourceFileConfigFileContent } = require("typescript");

const email = document.getElementById('email');
const password = document.getElementById('password');

if (email.lenght >= 0) {
    console.log('o email esta bom');
} else {
    console.log('o email não é valido');
}

if (password >= 8) {
    console.log('a senha esta boa');
} else {
    console.log('a senha é muito fraca');
}

const bnt = document.getElementById('bnt-submit');

bnt.addEventListener('click', () => {
    console.log('email enviado');
    window.alert('seu email foi enviado');
});