let password = '000';
let input = prompt('Введите пароль');
if (password === input) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')
}

let c = 54;
if (c > 0 && c < 10) {
    alert('Верно')
} else {
    alert('Неверно')
}

let d = 4;
let e = 8;
if (d > 100 || e > 100) {
    alert('Верно')
} else {
    alert('Неверно')
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = 3;
// switch (monthNumber) {
//     case 1:
//         alert('Январь');
//         break;
//     case 2:
//         alert('Февраль');
//         break;
//     case 3:
//         alert('Март');
//         break;
//     case 4:
//         alert('Апрель');
//         break;
//     case 5:
//         alert('Май');
//         break;
//     case 6:
//         alert('Июнь');
//         break;
//     case 7:
//         alert('Июль');
//         break;
//     case 8:
//         alert('Август');
//         break;
//     case 9:
//         alert('Сентябрь');
//         break;
//     case 10:
//         alert('Октябрь');
//         break;
//     case 11:
//         alert('Ноябрь');
//         break;
//     case 12:
//         alert('Декабрь');
//         break;
//     default:
//         alert('Такого месяца нет');
// }

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    default:
        alert('Такого месяца нет');
}

input = prompt('Пожалуйста, введите любое число');
let number = Number(input);
if (isNaN(number)) {
    alert('Вы ввели не число');
} else if (number % 2 == 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

let clientOS = 0;
if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    alert('Установите версию приложения для Android по ссылке');
} else {
    alert('Введите другое число');
}

let clientDeviceYear = 2015;
if (clientOS === 0) {
    if (clientDeviceYear <= 2015) {
        alert('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        alert('Установите версию приложения для iOS по ссылке');
    }
} else if (clientOS === 1) {
    if (clientDeviceYear <= 2015) {
        alert('Установите облегченную версию приложения для Android по ссылке');
    } else {
        alert('Установите версию приложения для Android по ссылке');
    }
} else {
    alert('Введите другое число');
}
