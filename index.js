
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

//переворот заданного числа c учетом минуса
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

//проверка числа на счастливое (обязательно число четное и первая половина = второй)
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
    return firstPart === secondPart === true;
}
