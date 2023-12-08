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

function isSolved(sud) {
  let result = 0
  let resultVertical = 0
  let resultHorizontal = 0
  let resultBox = 0

  
  function isSolved(sud) {
    let result = 0
    let resultVertical = 0
    let resultHorizontal = 0
    let resultBox = 0


    const  sumVertical = (a) => {
        let sudSum = 0
        for (let i = 0; i<9 ; i+=1) {
          sudSum += +sud[i][a]
        }
        if (sudSum === 45) {
            resultVertical += 1 
        } 
    }
    for (let j = 0; j <sud.length; j+=1) {
        sumVertical(j)
        }
    if (resultVertical === 9) {
        result +=1
    } 
    
    const  sumHorizont = (a) => {
        let sudSum = 0
        for (let i = 0; i<9 ; i+=1) {
          sudSum += +sud[a][i]
        }
        if (sudSum === 45) {
            resultHorizontal += 1 
        } 
    }
    for (let j = 0; j <sud.length; j+=1) {
        sumHorizont(j)
        }
    if (resultVertical === 9) {
        result +=1
    } 

    // function sumBox(a,b,c) {
    //     let sudSum = 0
    //     for (let i = a; i < b+1 ; i+=1) {
    //         let sumInSumSud = 0
    //         for (let j = c; j < 3; j+=1) {
    //             sumInSumSud += sud[a][c]
    //         }
    //         sudSum += sumInSumSud
    //     }
    //     if (sudSum === 45) {
    //         return true 
    //       } else {
    //         return false
    //       }
    // }  
    
    if ( result === 18) {
        return true
    } else {
        false
    }
    }


function prettyBoard(array) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */

  return console.table(array);
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

console.table(prettyBoard(input));
