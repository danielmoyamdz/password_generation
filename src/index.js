// src/index.js
const btnGenerate = document.getElementById('generate');
const inputLength = document.getElementById('length');
const resultArea = document.getElementById('result');

const CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generatePassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const idx = Math.floor(Math.random() * CHAR_SET.length);
        password += CHAR_SET[idx];
    }
    return password;
}

btnGenerate.addEventListener('click', () => {
    const len = parseInt(inputLength.value, 10);
    resultArea.textContent = generatePassword(len);
});
