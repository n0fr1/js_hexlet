
//реализация фибоначчи циклом
function fib(number) {
    if (number === 0) {
      return 0;
    }
    if (number === 1) {
      return 1;
    }
    let i = 0;
    let result = 0;
    let last = 0;
    for (i = 0; i <= number; i += 1) {
        if (i === 1) {
            result = 1;
        } else {
            result += last;
            last = result - last;
        }
    }
    return result;
}
  
//реализация FizzBuzz
function fizzBuss(begin, end){
    let i;
    for (i = begin; i <= end; i+= 1){
        if (i % 3 === 0 & i % 5 === 0){
            console.log('FizzBuzz');            
        } else if (i % 3 === 0) {
            console.log('Fizz');            
        } else if (i % 5 === 0) {
            console.log('Buzz');            
        } else {
            console.log(i);
        }
    }
}

//переворот заданного числа (c учетом возможного минуса числа)
function reverseInt(num){
    const strNum = Math.abs(num).toString();
    let i = 0;   
    let result = '';
    for (i = 0; i < strNum.length; i += 1) {
        result = `${strNum[i]}${result}`;
    }
    if (num !== Math.abs(num)) { 
        result = `-${result}`;
    }    
    result = Number(result);
    return result;     
}

//проверка числа на счастливый билетик (обязательно требование: число четное)
function isHappyTicket(ticket){
    let i = 0;
    const half = ticket.length / 2;
    let firstPart = 0;
    let secondPart = 0;
    for (i = 1; i <= ticket.length; i += 1) {
        if (i <= half) {
            firstPart += Number(ticket[i-1]);
        } else {
            secondPart += Number(ticket[i-1]);    
        }
    }
    return firstPart === secondPart;
}

//проверка на совершенное число (положительное целое число, равное сумме его положительных делителей)
function isPerfect(num) {
    if (num < 6) {
      return false;
    }
    let del = 1;
    let i = 2;
    const half = num / 2;
    while (i <= half) {
      if (num % i === 0) {
        del += i;
      }
      i += 1;
    }
    return num === del;
}

//1. инвертируем строку (заглавная буква => строчная и наоборот) с использованием регулярок.
function invertCaseRegular(str) {
    let result = '';
    for (let j = 0; j < str.length; j += 1) {
        if (/[a-zа-яё]/i.test(str[j])) {
            if (str[j] === str[j].toUpperCase()) {
                result += `${str[j].toLowerCase()}`;
            }
            if (str[j] === str[j].toLowerCase()) {
                result += `${str[j].toUpperCase()}`;                
            }
        } else {
            result += `${str[j]}`;            
        }    
    }
    return result;
}

//1. Проверка на счастливое число (возводим составные числа в квадрат и складываем до тех пор, пока не получится 1)
function isHappyNumber(num) {
    let result = num;
    if (result === 0) {
        return false;
    }
    if (result === 1) {
        return true;
    }
    let curExpResult = 0;
    for (let i = 0; i < 10; i += 1) {        
        if (Number(result) === 1) {
            return true;
        } 
        result = String(result);
        for (let j = 0; j < result.length; j += 1) {            
            const curExp = Number(result[j]) ** 2; //проверить линтер на pow
            curExpResult += curExp;            
        }    
        result = curExpResult;
        curExpResult = 0;                
    }
    return result === 1;
}

//Реализуйте и экспортируйте по умолчанию функцию, 
//которая принимает на вход массив интервалов и возвращает сумму всех длин интервалов. 
//В данной задаче используются только интервалы целых чисел от -100 до 100 , которые представлены в виде массива.
const unrollSort = (arr) => {
    const result = [];
    for (let j = 0; j < arr.length; j += 2) {
      let start = arr[j];
      const end = arr[j + 1];
      if (start !== end) {
        while (start <= end) {
          result.push(start);
          start += 1;
        }
      }
    }
    return result.sort((a, b) => a - b);
  };
  const sumIntervals = (arr) => {
    const unrolledArr = unrollSort(arr.flat());
    const uniqueArr = unrolledArr.filter((element, index) => unrolledArr.indexOf(element) === index);
    let result = 0;
    for (let j = 0; j < uniqueArr.length; j += 1) {
      const next = uniqueArr[j + 1];
      if (uniqueArr[j] + 1 === next) {
        result += 1;
      }
    }
    return result;
  };
  
  //Реализуйте функцию getLongestLength(), принимающую на вход строку и возвращающую длину максимальной последовательности
  // из неповторяющихся символов. Подстрока может состоять из одного символа.
  const getLongestLength = (str) => {
    let result = 0;
    let sub = '';
    for (const char of str) {
      if (!sub.includes(char)) {
        sub += char;
        result = Math.max(sub.length, result);
      } else {
        const cut = sub.indexOf(char);
        sub = sub.slice(cut + 1) + char;
      }
    }
    return result;
  };
  
  //Реализуйте и экспортируйте по умолчанию функцию, которая принимает двумерный массив 
  //(матрицу) и возвращает новый массив, 
  //основанный на переданном и измененный таким образом, что правая половина матрицы 
  //становится зеркальной копией левой половины, симметричной относительно вертикальной оси матрицы. 
  //Для простоты условимся, что матрица всегда имеет чётное количество столбцов и количество столбцов всегда равно количеству строк.
  const getMirrorMatrix = (matrix) => {
    for (const arr of matrix) {
      let shift = arr.length - 1;
      for (const num of arr) {
        arr[shift] = num;
        shift -= 1;
      }
    }
    return matrix;
  };

//Реализуйте и экспортируйте функции rotateLeft() и rotateRight(), 
//которые поворачивают матрицу влево (против часовой стрелки) 
//и соответственно вправо (по часовой стрелке).
//Матрица реализована на массивах.
//Функции должны возвращать новую матрицу не изменяя исходную.
const rotateLeft = (matrix) => {
    const result = [];
    let HorLength = matrix[0].length;
    let yrow = 0;
    let xrow = 0;
    while (HorLength > 0) {
      result.push([]);
      xrow = 0;
      /* eslint-disable-next-line */
      for (const arr of matrix) {
        result[yrow][xrow] = arr[HorLength - 1];
        xrow += 1;
      }
      yrow += 1;
      HorLength -= 1;
    }
    return result;
  };
  
  const rotateRight = (matrix) => {
    const result = [];
    const MaxHorIndex = matrix[0].length;
    for (let YRow = 0; YRow < MaxHorIndex; YRow += 1) {
      result.push([]);
      let MaxVerIndex = matrix.length - 1;
      let XRow = 0;
      while (MaxVerIndex >= 0) {
        result[YRow][XRow] = matrix[MaxVerIndex][YRow];
        MaxVerIndex -= 1;
        XRow += 1;
      }
    }
    return result;
  };