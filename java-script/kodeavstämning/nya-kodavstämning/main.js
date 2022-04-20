// ----capitalize----
// capitalize("hej på dig") // => "Hej på dig"
// capitalize("foo") // => "Foo"
// capitalize("12345") // => "12345"


function FirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}
let x = FirstLetter("hej på dig")
console.log(x)









// ----isPalindrome----

// isPalindrom("anna") // => true
// isPalindrome("david") // => false
// isPalindrom("naturrutan") // => true
// isPalindrome("nationalencyklopedin") // => false
// isPalindrome("ni talar bra latin") // => true

// function palindrome(str){
//     for (let i = 0; i <= str.length; i++){ 
//         if  (str[i] !== str[str.length - 1 - i]) {
//             return false;
//         }
//     }
// return true
// }
// let y= palindrome("ni talar bra latin")
// console.log(y)


function palindrom(str){
    str = str.split(' ').join('')
    for(let i in str){
        if(str[i] !== str[str.length -1 -i]){
            return false
        }
    }
    return true
}
let y= palindrom("ni talar bra latin")
console.log(y)



// -----getOldest-----


function getOldest(array) {
    
    let Oldest = array[0]


    for (let i = 0; i < array.length; i++) {
        if (Oldest.age< array[i].age) {
            Oldest = array[i]
            
        }

    

    } return Oldest;
}
const array = [
    { name: 'Sven', age: 53, interest: ['Stickning'] },
    { name: 'Greta', age: 62, interest: ['Fallskärmshoppning', 'Kickboxning'] },
    { name: 'Åsa', age: 32, interest: ['Fotografi', 'Burksamling'] },
]    
console.log(getOldest(array));  

function Oldest(array) { 

    const Oldest =  Math.max(...array.map(obj => obj.age)); 
    // if (array[i] === Oldest) {  
    //     Oldest.push(array[i]); 
    // }  
    return Oldest
   }; 

//    const array = [
//     { name: 'Sven', age: 53, interest: ['Stickning'] },
//     { name: 'Greta', age: 62, interest: ['Fallskärmshoppning', 'Kickboxning'] },
//     { name: 'Åsa', age: 32, interest: ['Fotografi', 'Burksamling'] },
// ] 
//    console.log(Oldest(array)); 










