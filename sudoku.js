const { log } = require('console');
const fs = require('fs');
const path = require('path');
const dirNamePuzzles = path.join(__dirname, './puzzles.txt');

function read() {
  const puzzles = fs.readFileSync(dirNamePuzzles, 'utf-8');
  return puzzles;
}

let puzzles = read();
let puzzles1 = puzzles.slice(0, 81);

function transformationStrIsArray(str) {
  let strochka = [];
  const result = [];
  let indexMax = 9;
  let indexMin = 0;

  for (let j = 0; j < str.length; j += 1) {
    if (strochka.length) {
      result.push(strochka);
      strochka = []
      indexMax += 9;
      indexMin += 0;
    }

    for (let i = indexMin; i < indexMax; i += 1) {
      if (str[i] === '-') {
        strochka.push('NaN');
      }
      if (i < 9) {
        strochka.push(str[i]);
      }
    }
  }
  return result;
}

let result = transformationStrIsArray(puzzles1);

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

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
