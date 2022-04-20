

// ----Password validation - Without RegExp----

function checkPassword() {
    let oldPassword = checkPass
    let newPassword = ""
    if(checkPass===oldPassword){
        return true
    }else{
        if (checkPass !== oldPassword) {
            
        }
        return false;
    }
}

function checkPass(pass) {
    if(pass.length<8 , pass.length> 50  ){
        return true;
    }
    let str= 0;
    if(pass.match(/([a-z])+/)){
        str++;
    }
    if(pass.match(/([0-9])+/)){
        str++;
    }
    if(pass.match(/([A-Z])+/)){
        str++;
    }
    if(pass.match(/([^a-zA-Z0-9])+/)){
        str++;
    }
    return str;
}







// // ----Order sum-----

    let pris = [
                {name:'Gurka', amount: 2, price: 10},
                {name:'Vattenmelon', amount: 1, price: 30},
                {name:'Kokosnöt', amount: 2, price: 25},
                {name: 'Porche', amount: 1, price: 130000},
                {name: 'Kaffe', amount: 1, price: 25},
                {name: 'Muffin', amount: 1, price: 30}
                ];
    
    function orderSum(pris) {
        
        let output = 0;
        for (let i = 0; i < pris.length; i++) {
            if (pris[i].amount===pris) {
                result.push(pris[i])
            }
            output = output + pris[i].amount * pris[i].price;         
        }
        return output;
    }
    


//     // E-mail Data Extractor----


    function reformateEmails(users){
        for(let user of users){
            user.email = user.name.last + "." + user.name.first + "@evilcorp." + findDomain(user.nat);
        }
    }



    // Password validation - Without RegExp
function validatePassword(pwd) {
    // if (pwd.length < 8) return false;
    // if (pwd.length > 50) return false;
    // if (!conatinsUpperCaseLetter(pwd)) return false;
    // if (!conatinsLowerCaseLetter(pwd)) return false;
    // if (!containsSpecialCharacter(pwd)) return false;
    // if (
    //   pwd.length < 8 ||
    //   pwd.length > 50 ||
    //   !conatinsUpperCaseLetter(pwd) ||
    //   !conatinsLowerCaseLetter(pwd) ||
    //   !containsSpecialCharacter(pwd)
    // ) {
    //   return false;
    // }
  
    if (pwd.length < 8) {
      return false;
    }
  
    if (pwd.length > 50) {
      return false;
    }
    if (!conatinsUpperCaseLetter(pwd)) {
      return false;
    }
    if (!conatinsLowerCaseLetter(pwd)) {
      return false;
    }
    if (!containsNumber(pwd)) {
      return false;
    }
    if (!containsSpecialCharacter(pwd)) {
      return false;
    }
  
    return true;
  }
  
  function conatinsUpperCaseLetter(str) {
    for (let i in str) {
      if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase())
        return true;
    }
    return false;
  }
  function conatinsLowerCaseLetter(str) {
    for (let value of str) {
      if (value === value.toLowerCase() && value !== value.toUpperCase())
        return true;
    }
    return false;
  }
  function containsNumber(str) {
    for (let i in str) {
      if (Number.isInteger(Number(str[i]))) return true;
    }
    return false;
  }
  function containsSpecialCharacter(str) {
    const specialCharacter = [
      " ",
      "”",
      "’",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      "]",
      "`",
      "|",
      "~",
      "{",
      "}",
      "^",
      "[",
      "!",
      "@",
      "#",
      "$",
      "%",
      "&",
      "*",
      "(",
      ")",
      "?",
      ">",
      "_",
      "-",
    ];
    for (let i in str) {
      for (let j in specialCharacter) {
        if (str[i] == specialCharacter[j]) return true;
      }
    }
  
    return false;
  }
  
  // Order sum
  function orderTotal(order) {
    let price = 0;
    for (let i in order) {
      price = price + order[i].amount * order[i].price;
    }
  
    return price;
  }
  
  // E-mail Data Extractor
  function extractEmailData(email) {
    const [before, domain] = email.split("@");
    const [local, ...tags] = before.split("+");
  
    return { local, domain, tags };
  }