let a, b;
// 1
a = 10;  
alert(a);
a = 20;
alert(a);

// 2
let release = 2007;
alert(release);

// 3
let name = 'Brendan Eich';
alert(name);

// 4
a = 10;
b = 20; 
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

// 5
const base = 2; 
const exponent = 5; 
const result = base ** exponent;
alert(result);

// 6 
a = 9;
b = 2;
let remainder = a % b; 
alert(remainder);

// 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

// 8
let age = prompt('Сколько вам лет?');
alert(age);

// 9
let user = {
    name: 'Harry',
    age: 30,
    isAdmin: true, 
};

// 9.1 
user["city of residence"] = 'Moscow';

// 9.2
user.age = 35; 

// 9.3
delete user["city of residence"];

// 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?', 'name');
alert(user[info]);

// 10
let username = prompt('Как Вас зовут?');
alert(`Привет, ${username}`);
