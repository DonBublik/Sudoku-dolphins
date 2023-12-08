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


function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
