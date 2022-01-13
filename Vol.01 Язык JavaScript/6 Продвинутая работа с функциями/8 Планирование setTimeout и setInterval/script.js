/*
Вывод каждую секунду
важность: 5

Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
начиная от from и заканчивая to.

Сделайте два варианта решения.
  Используя setInterval.
  Используя рекурсивный setTimeout.
*/

{

  const printNumbers = (from, to) => {
    let currentNum = from;    

    let intervalId = setInterval( () => {
      alert(currentNum);

      if (currentNum < to) {
        currentNum += 1;
      } else clearInterval(intervalId);
    }, 1000);

  };

  // printNumbers(1, 6);
}

{

  const printNumbers = (from, to) => {
    let currentNum = from;

    let timeoutId = setTimeout( function tick() {
      alert(currentNum);
      currentNum += 1;
      timeoutId = setTimeout(tick, 1000);

      if (currentNum > to) clearTimeout(timeoutId);
    }, 1000);
  };

  printNumbers(10, 13);

}
