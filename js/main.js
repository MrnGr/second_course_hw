
document.getElementById('game1').addEventListener('click', () => {
    let input = prompt('Пожалуйста, введите номер месяца');
    let number = Number(input);

    if (isNaN(number)) {
        alert('Вы ввели не число');
        return
    } else if (number < 1 || number > 12) {
        alert('Вы ввели неправильный месяц');
        return
    }
    
    switch (number) {
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
})
