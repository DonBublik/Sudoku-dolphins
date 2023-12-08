function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard(array) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
  
  // const str = array.toString();

  // if (regexp.test(str)) {
  // const result = str.replace(regexp, "$1$2$3 $4$5$6 $7$8$9");
  // return result;
  // }
  // return str;
  let temp = "";
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 1; j < array.length; j += 1) {
      temp = `${temp}${array[i][j]}`;
    }
  }
  console.log(temp);
  const regexp = /(\d)/;

  if (regexp.test(temp)) {
    const result = temp.replace(regexp, '');
    return result;
  }
  return temp;

  //
}

const input = [
  [4, 5, 3, 2, 1, 7, 8, 9, 6],
  [1, 6, 2, 5, 8, 9, 4, 7, 3],
  [7, 9, 8, 6, 3, 4, 2, 5, 1],
  [2, 3, 1, 4, 5, 8, 9, 6, 7],
  [9, 8, 5, 3, 7, 6, 1, 4, 2],
  [6, 7, 4, 1, 9, 2, 3, 8, 5],
  [3, 4, 9, 7, 6, 1, 5, 2, 8],
  [5, 2, 6, 8, 4, 3, 7, 1, 9],
  [8, 1, 7, 9, 2, 5, 6, 3, 4],
];

console.log(prettyBoard(input));
