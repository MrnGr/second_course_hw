//1
function minNum(a, b) {
    if (a < b) {
        return a < b ? a : b
    }
}

console.log(minNum(8, 4))
console.log(minNum(6, 6))

//2

function question(num) {
    return num % 2 === 0 ? 'Число четное' : 'Число нечетное'
}

let var2 = Number(prompt("Введите число"))

console.log(question(var2))

//3.1
function square(num) {
    num = num ** 2
    console.log(num)
}

let var3 = Number(prompt("Введите число", 24))

square(var3)

//3.2
function square(num) {
    return num ** 2
}

let var4 = Number(prompt("Введите число", 24))

console.log(square(var4))

//4
function userAge(age) {
    if (age < 0) {
        console.log("Вы ввели неправильное значение")
    } else if (age >= 13) {
        console.log("Добро пожаловать!")
    } else if (age <= 12) {
        console.log("Привет, друг!")
    }
}

let age = Number(prompt("Сколько вам лет?"))

userAge(age)

//5
function sum(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log("Одно или оба значения не являются числом")
    } else if (sum = a + b) {
        console.log(sum)
    }
}

let a = Number(prompt("Введите перове число"))
let b = Number(prompt("Введите второе число"))

sum(a, b)

//6
function cube(num) {
    if (isNaN(num)) {
        console.log("Переданный параметр не является числом")
    } else {
        console.log(`${num} в кубе равняется ${num ** 3}`)
    }
}

let num = Number(prompt("Введите число"))

cube(num)

//7
function getArea() {
    return Math.PI * this.radius ** 2
}

function getPerimeter() {
    return 2 * Math.PI * this.radius
}

let circle1 = {
    radius: 28,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

let circle2 = {
    radius: 37,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

console.log(circle1.getArea())
console.log(circle1.getPerimeter())

console.log(circle2.getArea())
console.log(circle2.getPerimeter())
