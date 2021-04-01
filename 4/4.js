
function getnumbertodigits(num) {
    if (Number.isInteger(num) && num >= 0 && num <= 999) {
        return {
            units: num % 10,
            tens: Math.floor(num / 10) % 10,
            hundreds: Math.floor(num / 100),
        }
    } else {
        console.log('Введите целое чисо в дпазоне от 0 до 999!');
        return {};
    }


}

console.log(getnumbertodigits(987));
