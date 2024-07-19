
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

// 11
game2.addEventListener("click", () => {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
 
    fruits = fruits.sort(() => Math.random() - 0.5)
    alert(fruits.join(', '))
 
    const userFirst = prompt('Чему равнялся первый элемент массива?')
    const userSecond = prompt('Чему равнялся последний элемент массива?')
 
    const result1 = userFirst && userFirst.toLowerCase() === fruits[0].toLowerCase()
    const result2 = userSecond && userSecond.toLowerCase() === fruits.slice(-1)[0].toLowerCase()
 
    if (result1 && result2) {
       console.log('Вы победили!')
    } else if (result1 || result2) {
       console.log('Так близко!')
    } else {
       console.log('Попробуй снова :(')
    }
})
