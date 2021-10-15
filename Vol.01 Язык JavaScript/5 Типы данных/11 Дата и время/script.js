/*
Создайте дату
важность: 5

Создайте объект Date для даты: 20 февраля 2012 года,
3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert.
*/

let past2012Data = new Date( Date.parse('2012-02-20T03:12:00') );
console.log(past2012Data);

/*
Покажите день недели
важность: 5

Напишите функцию getWeekDay(date),
показывающую день недели в коротком формате:
«ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
*/

const getWeekDay = date => {
    let weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return weekDays[date.getDay()];
};

console.log( getWeekDay(past2012Data) );

/*
День недели в европейской нумерации
важность: 5

В Европейских странах неделя начинается с понедельника
(день номер 1), затем идёт вторник (номер 2) и так до воскресенья
(номер 7). Напишите функцию getLocalDay(date),
которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2
*/

const getLocalDay = date => {
    if (date.getDay() === 0) {
        return 7;
    }
    return date.getDay();
};

let date = new Date(2012, 0, 3);
console.log( getLocalDay(date) );

/*
Какой день месяца был много дней назад?
важность: 4

Создайте функцию getDateAgo(date, days),
возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число,
то getDateAgo(new Date(), 1) вернёт девятнадцатое
и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

P.S. Функция не должна изменять переданный ей объект date.
*/

const getDayAgo = (date, days) => {
    let timeDate = date.getTime();
    let msToDay = 24 * 3600 * 1000 * days;

    return new Date(timeDate - msToDay);
};

let date1 = new Date(2015, 0, 2);

console.log( getDayAgo(date1, 1) );
console.log( getDayAgo(date1, 2) );
console.log( getDayAgo(date1, 365) );

/*
Последнее число месяца?
важность: 5

Напишите функцию getLastDayOfMonth(year, month),
возвращающую последнее число месяца.
Иногда это 30, 31 или даже февральские 28/29.

Параметры:

    year – год из четырёх цифр, например, 2012.
    month – месяц от 0 до 11.

К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

const getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month + 1, 1, -12);
    return date.getDate();
};

console.log( getLastDayOfMonth(2012, 1) );

/*
Сколько сегодня прошло секунд?
важность: 5

Напишите функцию getSecondsToday(),
возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00,
и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)

Функция должна работать в любой день,
т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

const getSecondsToday = () => {
    const today = new Date();
    return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
};

console.log( getSecondsToday() );

/*
Сколько секунд осталось до завтра?
важность: 5

Создайте функцию getSecondsToTomorrow(),
возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600

P.S. Функция должна работать в любой день,
т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

const getSecondsToTomorrow = () => {
    let today = new Date();
    let tomorrowDay = new Date( today.getFullYear(), today.getMonth(), today.getDate() + 1 );
    return Math.round(tomorrowDay.getTime() / 1000) - Math.round(Date.now() / 1000);
};

console.log( getSecondsToTomorrow() );

/*
Форматирование относительной даты
важность: 4

Напишите функцию formatDate(date), форматирующую date по следующему принципу:

    Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
    В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
    В противном случае, если меньше часа, вывести "m мин. назад".
    В противном случае, полная дата в формате "DD.MM.YY HH:mm".
    А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/

const formatDate = date => {
    let now = Date.now();

    let rangeMs = now - date.getTime();

    if (rangeMs < 1000) {
        return 'прямо сейчас';
    } else if (rangeMs < 60000) {
        let sec = Math.round(rangeMs / 1000);
        return `${sec} сек. назад`;
    } else if (rangeMs < 360000) {
        let min = Math.round(rangeMs / 60000);
        return `${min} мин. назад`;
    } else {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();

        year = String(year).slice(-2);

        if (month < 10) month = `0${month}`;
        if (day < 10) day = `0${day}`;
        if (hour < 10) hour = `0${hour}`;
        if (minute < 10) hour = `0${minute}`;

        return `${day}.${month}.${year} ${hour}:${minute}`;
    }
};

console.log( formatDate(new Date(new Date - 1)) );
console.log( formatDate(new Date(new Date - 30 * 1000)) );
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );
console.log( formatDate(new Date(new Date - 86400 * 1000)) );