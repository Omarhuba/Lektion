function maxOfTwo(input1, input2){
   
    let result;

    if(input1 < input2){
        result = input2;
    }
    else{
        result = input1;
    }

    return result;
}

function minimumOfTwo(num1, num2){
    
    let result;

    if(num1 > num2){
        result = num2;
    }
    else{
        result = num1;
    }

    return result;
}

function minimumOfThree(num1, num2, num3){
   
    let result;

    if(num1 > num2){
        result = num2;
    }
    else{
        result = num1;
    }
    if(result > num3){
        result = num3;
    }
    else{
        result = result;
    }

    return result;
}

function maximumOfFour(num1, num2, num3, num4){
    let result;

    if(num1 > num2){
        result = num1;
    }
    else{
        result = num2;
    }
    if(result > num3){
        result = result;
    }
    else{
        result = num3;
    }
    if(result > num4){
        result = result;
    }
    else{
        result = num4;
    }

    return result;
}

 function sumTo(num){

    let result;
    i = 0;
    product = num;
    num2 = num;

    while(i < num){
        i++;
        num2--;
        product = product + num2;
    }
    if(i = num){
        result = product;
    }

    return result;
 }

 function factorial(num){

    let result;
    i = num;
    product = 1;

    while(i > 0){
        product = product * i;
        i--;
    }
    if(i = num){
        result = product;
    }

    return result;

 }


 function fibbonaci(num){
    i = 1;
    a = 1;
    b = 0;
    product = 0

    while(i < num){
        product = a + b;
        a = b;
        b = product;
        i++
    }

    return product;
 }


function main(){
    const num = 5;
    const num1 = 3;
    const num2 = 5;
    const num3 = 4;
    const num4 = 6;

    const max1 = maxOfTwo(num1, num2);
    const max2 = maxOfTwo(60, -4);
    const min1 = minimumOfTwo(num1, num2);
    const min2 = minimumOfTwo(60, -4);
    const mint1 = minimumOfThree(num1, num2, num3);
    const mint2 = minimumOfThree(60, -4, 5);
    const maxf1 = maximumOfFour(num1, num2, num3, num4);
    const maxf2 = maximumOfFour(60, -4, 5, 400);
    const sum1 = sumTo(num);
    const sum2 = sumTo(8);
    const fact1 = factorial(num);
    const fact2 = factorial(7);
    const fib1 = fibbonaci(num);
    const fib2 = fibbonaci(13);
    

}
main();