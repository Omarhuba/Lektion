// ---MinimumOfTwo---
function minimumOfTwo(num1,num2) {
    if (num1 < num2) {
        result = num1
    }else{
        result = num2
    }
    return result
}
function main() {
    let result= minimumOfTwo(10,2)
}
main()

// ----minimumOfThree---
function minimumOfThree(num1,num2,num3) {
    let result;
    if (num1 < num2) {
        result = num1;
    }else {
        result = num2
    }
    if (num3 < result) {
        result = num3;
    }
    return result;
}
minimumOfThree(-200,120,2)

// ---maximumOfFour---
function maximumOfFour(num1,num2,num3,num4) {
    let result;
    if (num1 < num2) {
        result = num2;
    }else{
        result = num1;
    }
    if (result > num3) {
        result = result;
    }else{
        result = num3;
    }
    if (result > num4) {
        result = result;
    }else{
        result = num4;
    }
    return result;
}
maximumOfFour(10,5,6,19)



function maximumOfFour(num1, num2, num3, num4){
    let max;
    if (num1>num2){
        max=num1;
    } else{max=num2;

    }if (num3>max){
        num3=max;
    }if(num4>max){
        max=num4;
    }
    return max;
}
maximumOfFour(10,105,8,40);

// ---Ticket Machine---
function TicketMachine(input) {
    let pris;
    if (input <= 17) {
        pris = 10;
    }else{
        pris = 20;
    }
    if (input >= 65) {
        pris = 15;
    }
    return pris;
}
TicketMachine(18);

// ---sumTo----
function sumTo(input) {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
         sum = sum + i;
    }
    return sum;
}
sumTo(5);

// ----factorial----
function factorial(input) {
    let output = 1;
    for (let i = 1; i <= input; i++) {
        output = output*i
    }
    return output;
}
factorial(5);

// ----Fibonacci----
function Fibonacci(input) {
    let num1 = 1;
    let num2 = 0; //----????
    let i = 0;
    for (let i = 0; i < input; i++) {
       sum = num1 + num2;
       num1 = num2;
       num2 = sum;  
    }
    return sum;
}
Fibonacci(8);

// 1 1 2 3 5 8 13 21
function fib(n){
    if (n==1){return 0};
    if(n==2){return 1};
    return fib(n-2)+ fib(n-1);
}
fib(3);


// ----Collatz Conjecture----
function CollatzConjecture(input) {
    let output;
    if (input % 2 ==0) {   
        output = input/2;
    }else{
        output = input*input*input+1
    }
    return output;
}
CollatzConjecture(4)





