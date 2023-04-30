
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
    if (num === 0) {
        return false;
    }
    if (num === 1) {
        return true;
    }
    let result = Math.pow(num, 2);
    let curExpResult = 0;
    //let test = 1;
    for (let i = 0; i < 10; i += 1) {        
        console.log(result);
        if (result === 1) {
            break;
        } 
        result = String(result);
        for (let j = 0; j < result.length; j += 1) {            
            let curExp = Math.pow(Number(result[j]), 2);
            curExpResult += curExp;            
        }    
        result = curExpResult;
        // if (test === 4) {
        //     console.log(curExpResult);                
        // } 
        curExpResult = 0;                
        //test += 1;
    }
    return num === 1;
} 
