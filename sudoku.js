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

