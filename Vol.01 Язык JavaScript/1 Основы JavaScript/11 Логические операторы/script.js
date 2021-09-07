
/*
Проверка значения из диапазона
важность: 3

Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
«Включительно» означает, что значение переменной age может быть равно 14 или 90.
 */
const checkAgeDiapazon = (age, minAge, maxAge) => (age >= minAge) && (age <= maxAge);
console.log(checkAgeDiapazon(4, 14, 90))
console.log(checkAgeDiapazon(14, 14, 90))
console.log(checkAgeDiapazon(54, 50, 70))
console.log(!checkAgeDiapazon(26, 14, 90))

/*
Проверка логина
важность: 3

Напишите код, который будет спрашивать логин с помощью prompt.
Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:
    Если введён пароль «Я главный», то выводить «Здравствуйте!»,
    Иначе – «Неверный пароль»,
    При отмене – «Отменено».
*/

let userName = 'Админ';
let userPassword = 'Я главный';

let askLogin = prompt('Введите логин', '');

if (askLogin === userName) {
  let askPassword = prompt('Введите пароль', '');
  if (askPassword === userPassword) {
    alert('Здравствуйте');
  } else if (askPassword === null || askPassword === '') {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }
} else if (askLogin === null || askLogin === '') {
  alert('Отменено');
} else {
  alert('Я Вас не знаю!');
}
