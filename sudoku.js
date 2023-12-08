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

  
  const  sumVertical = (a) => {
      let sudSum = 0
      for (let i = 0; i<9 ; i+=1) {
        sudSum += +sud[i][a]
        console.log(sudSum);
      }
      if (sudSum === 45) {
          console.log(sudSum)
          resultVertical += 1 
      } 
  }
  for (let j = 0; j <sud.length; j+=1) {
      sumVertical(j)
      }
  if (resultVertical === 9) {
      return true
  } else {
      return false
  }
  
  function sumBox(a,b,c) {
      let sudSum = 0
      for (let i = a; i < b+1 ; i+=1) {
          let sumInSumSud = 0
          for (let j = c; j < 3; j+=1) {
              sumInSumSud += sud[a][c]
          }
          sudSum += sumInSumSud
      }
      if (sudSum === 45) {
          return true 
        } else {
          return false
        }
  }

  function sumHorizont(a) {
      let sudSum = 0
      for (let i = 0; i<9 ; i+=1) {
        sudSum += +sud[a][i]
      }
      if (sudSum === 45) {
          return true 
        } else {
          return false
        }
  }
  }


function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
