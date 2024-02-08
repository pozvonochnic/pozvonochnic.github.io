alert('Задание 1');

const num1 = +prompt('Число 1');
const num2 = +prompt('Число 2');

if (num1 <= 1 && num2 >= 3) {
    alert('Условие выполняется');
} else {
    alert('Условие не выполняется');
}

let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

test === true ? console.log('+++') : console.log('---');

const day = +prompt('Задание 3. Введите сегодняшнюю дату (число)');
if (day < 1 || day > 31) {
    alert('Дата введена не верно')
}
else if (day < 11) {
    alert('Cейчас первая декада месяца');
}
else if (day > 20) {
    alert('Cейчас третья декада месяца');
}
else
    alert('Cейчас вторая декада месяца');

const userNum = +prompt('Задание 4. Введите целое положительное число')
const hundreds = (userNum % 1000 - userNum % 100) / 100;
const tens = (userNum % 100 - userNum % 10) / 10;
const ones = userNum % 10;

alert(`В числе ${userNum} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${ones}`);
