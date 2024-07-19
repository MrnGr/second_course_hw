for (let index = 0; index < 2; index++) {
    console.log('Привет');
}

for (let index = 1; index <= 5; index++) {
    console.log(index);
}

for (let index = 7; index <= 22; index++) {
    console.log(index);
}

const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
}

for (const key in obj) {
    const element = obj[key];
    console.log(`${key} — зарплата ${element} долларов`);
}

let n = 1000
let num = 0

while (n >= 50) {
    n /= 2 
    num++
}

console.log(`Получилось число ${n}`);
console.log(`Количество делений ${num}`);

let day = 2;

do {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
    day += 7;
} while (day <= 31);
