const { log } = require('console');

const fs = require('fs');
const path = require('path');
const dirNamePuzzles = path.join(__dirname, './puzzles.txt');

function read() {
  const puzzles = fs.readFileSync(dirNamePuzzles, 'utf-8');
  return puzzles;
}

let puzzles = read();
let puzzlesArr = puzzles.split('\r\n');
let puzzlesArr1 = puzzles.split('').slice(0, 81);

function transformationStrIsArray(str) {
  const tabl = [];
  let strochka = [];

  if (str.length == 0) return tabl;

  for (let i = 0; i < str.length; i++) {
    if (i == 8) {
      strochka.push(str[i]);
      tabl.push(strochka);
      return tabl.concat(transformationStrIsArray(str.slice(9)));
    }
    strochka.push(str[i]);
  }
}
let result = transformationStrIsArray(puzzlesArr1);
console.log(result);

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved(sud) {
  let result = 0;
  let resultVertical = 0;
  let resultHorizontal = 0;
  let resultBox = 0;

  const sumVertical = (a) => {
    let sudSum = 0;
    for (let i = 0; i < 9; i += 1) {
      sudSum += +sud[i][a];
      console.log(sudSum);
    }
    if (sudSum === 45) {
      console.log(sudSum);
      resultVertical += 1;
    }
  };
  for (let j = 0; j < sud.length; j += 1) {
    sumVertical(j);
  }
  if (resultVertical === 9) {
    return true;
  } else {
    return false;
  }

  function sumBox(a, b, c) {
    let sudSum = 0;
    for (let i = a; i < b + 1; i += 1) {
      let sumInSumSud = 0;
      for (let j = c; j < 3; j += 1) {
        sumInSumSud += sud[a][c];
      }
      sudSum += sumInSumSud;
    }
    if (sudSum === 45) {
      return true;
    } else {
      return false;
    }
  }

  function sumHorizont(a) {
    let sudSum = 0;
    for (let i = 0; i < 9; i += 1) {
      sudSum += +sud[a][i];
    }
    if (sudSum === 45) {
      return true;
    } else {
      return false;
    }
  }
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
  let temp = '';
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 1; j < array.length; j += 1) {
      temp = `${temp}${array[i][j]}`;
    }
  }

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
