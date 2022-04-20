1.//Number  Bigint   String   Array  Boolean   Null  Undefinde  Symbol  Objekt
2.// true
3.// let bara synlig i den scopet   var kan finnas i hela functionen
4.// genom att skriva typeof(vadiable)--> "" [] {} 12  true or false  
5.//  { }-->C
6.// console.log("Hello")
7.// 'Good Bye World'
8.// A-B-C ALLA
9.
function stringLength(str) {
    let i = 0;
    let character = str[i];
    while (character != undefined) {
        i++;
        character = str[i];
        
    }
    return i;
}
function main() {
    let sentence = "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one.";
    let x = stringLength(sentence)
}
// main()  ------97

10. 
let name = 'Omar' 
`Hej N din gamle knasboll!`
`Hej ${Omar} din gamla knasboll`
let name = 'Omar' 
console.log(`Hej ${name} din gamle knasboll`)
// Hej Omar din gamle knasboll

11.
let fruits = ["apple","banan", "orange", "kiwi", "päron"]

12.
let fruits = ["apple","banan", "orange", "kiwi", "päron"]
fruits.push("ananas");
fruits.unshift("mango");

13.
let fruits = ["apple","banan", "orange", "kiwi", "päron"]
fruits.shift(); 
fruits.pop();

14.
let fruits = ['apple', 'orange', 'pear', 'kiwi']
fruits.splice(2,0, "lemon", "kiwi"); /*-->lägg element till index[2]*/ 

15.

