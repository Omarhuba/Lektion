function reverse(str){
    let output = "";
        for (let i = str.length-1; i >= 0; i--) {
        output += str[i]
    }
    return output
}
if(process.argv[2]){
    console.log(reverse(process.argv[2]))
}else{
    console.log('hello')
}