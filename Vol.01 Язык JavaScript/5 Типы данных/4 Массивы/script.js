/*
Операции с массивами
важность: 5

Давайте произведём 5 операций с массивом.

    - Создайте массив styles с элементами «Джаз» и «Блюз».
    - Добавьте «Рок-н-ролл» в конец.
    - Замените значение в середине на «Классика».
      Ваш код для поиска значения в середине должен работать
      для массивов с любой длиной.
    - Удалите первый элемент массива и покажите его.
    - Вставьте «Рэп» и «Регги» в начало массива.

Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/

const styles = ['Джаз', 'Блюз'];
console.log(styles);
styles.push('Рок-н-ролл');
console.log(styles);
styles[Math.trunc(styles.length / 2)] = 'Классика';
console.log(styles);
let firstElem = styles.shift();
console.log(firstElem);
console.log(styles);
styles.unshift('Рэп', 'Рэгги');
console.log(styles);

/*
Сумма введённых чисел
важность: 4

Напишите функцию sumInput(), которая:

    Просит пользователя ввести значения,
    используя prompt и сохраняет их в массив.
    Заканчивает запрашивать значения,
    когда пользователь введёт не числовое значение,
    пустую строку или нажмёт «Отмена».
    Подсчитывает и возвращает сумму элементов массива.

P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

const sumInput = () => {
  let askNumber = prompt('Введите число', '');
  let resultArray = [];

  while (askNumber === '0' || (askNumber !== null && askNumber !== '' && !Number.isNaN(+askNumber))) {
    resultArray.push(askNumber);
    askNumber = prompt('Введите ещё число', '');
  }

  let sum = 0;

  for (let num of resultArray) {
    sum += +num;
  }

  return sum;
};

sumInput();

/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

  getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
  getMaxSubSum([2, -1, 2, 3, -9]) = 6
  getMaxSubSum([-1, 2, 3, -9, 11]) = 11
  getMaxSubSum([-2, -1, 1, 2]) = 3
  getMaxSubSum([100, -9, 2, -3, 5]) = 100
  getMaxSubSum([1, 2, 3]) = 6 (берём все)
*/

const getMaxSubSum = arr => {
  
  const checkAllNegative = array => {

    for (let item of array) {
      if (item > 0) return false;
    }
    return true;
  };

  const checkAllPositive = array => {

    for (let item of array) {
      if (item < 0) return false;
    }
    return true;
  };

  const countSum = array => {
    
    let sum = 0;

    for (let item of array) {
      sum += item;
    }

    return sum;
  };

  if ( checkAllNegative(arr) || arr.length === 0) return 0;

  if ( checkAllPositive(arr) ) return countSum(arr);

  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(partialSum, maxSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
};

console.log(getMaxSubSum( [100, 9, 2, 3, 5] ));
console.log(getMaxSubSum( [2, -1, 2, 3, -9] ));
console.log(getMaxSubSum( [-1, 2, 3, -9, 11] ));
console.log(getMaxSubSum( [-2, -1, 1, 2] ));
console.log(getMaxSubSum( [100, -9, 2, -3, 5] ));