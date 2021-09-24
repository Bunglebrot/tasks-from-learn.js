/*
Сделать первый символ заглавным
важность: 5

Напишите функцию ucFirst(str), возвращающую строку str
с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
*/
const ucFirst = word => word.length > 0 ? word[0].toUpperCase() + word.slice(1) : '';

console.log(ucFirst('вася'));
console.log(ucFirst('вася') == 'Вася');
console.log(ucFirst(' '));
console.log(ucFirst(''));

/*
Проверка на спам
важность: 5

Напишите функцию checkSpam(str), возвращающую true,
если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/
const checkSpam = str => str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');

let strin = 'XXXpop';
console.log(checkSpam('ViAgraPaty'));
console.log(checkSpam('ViapopGra'));
console.log(checkSpam('Xp Xx'));
console.log(checkSpam('XxXx cold pop'));
console.log(checkSpam(strin));
console.log(strin);

/*
Усечение строки
важность: 5

Создайте функцию truncate(str, maxlength), которая проверяет длину строки str
и, если она превосходит maxlength, заменяет конец str на "…",
так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка,
если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
*/
const truncate = (str, maxlength) => str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 10));
console.log(truncate('Всем привет!', 8).length);


/*
Выделить число
важность: 4

Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

alert( extractCurrencyValue('$120') === 120 ); // true
*/

const extractCurrencyValue = str => Number(str.slice(1));

console.log(extractCurrencyValue('$120') === 120);
