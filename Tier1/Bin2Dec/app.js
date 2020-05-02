const input = document.querySelector('.binary-input');
const submit = document.querySelector('input[type="submit"]');
const result = document.querySelector('.result');

submit.addEventListener('click', () => {
    const binary = input.value.trim();
    const regex = RegExp("^[01]+$");

    if (binary !== '' && regex.test(binary)) {
        let total = 0;
        for (let char of binary) {
            total = total * 2 + parseInt(char); //calculation for converting to decimal
        }
        result.innerHTML = total;
    } else {
        result.innerHTML = 'Not valid binary!';
    }
});