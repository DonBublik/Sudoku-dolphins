const sud = [
    [5,3,4,6,7,8,9,1,2,],
    [6,7,2,1,9,5,3,4,8,],
    [1,9,8,3,4,2,5,6,7,],
    [8,5,9,7,6,1,4,2,3,],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]]
let suds = '534678912672195348198342567859761423426853791713924856961537284287419635345286179'

console.log(sud.length);



const sumBox = (a,b,c) => {
    let sumBox = 0
    for (let i = a; i < b+1 ; i+=1) {
        let sumInSumSud = 0
        for (let j = c; j < 3; j+=1) {
            sumInSumSud += sud[a][c]
        }
        sudSum += sumInSumSud
    }
    if (sudSum === 45) {
        return true 
      } 
    for (let b = 0; b <9;b+=3) {
        for (let m = 0; m<9;m+=3) {
            sumBox()
        }
    }
}

function test (sud) {
    let resultHorizontal = 0
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
    if (resultHorizontal === 9) {
        return true
    } else {
        return false
    }
}


console.log(test(sud));

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
    // if (sumIsTrue(0,8) === true && sumIsTrue(0,8) === true && sumIsTrue(0,8) === true && )
    // let a = 0
    // for (let b = 8; b < sud.length; b+=9) {
    //     if (sumIsTrue(a,b) === true) {
    //         a+=9
    //         b+=9
            
    //     }
    // }
  
  
  /**  
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */

