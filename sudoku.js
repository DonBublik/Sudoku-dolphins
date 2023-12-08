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


function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
