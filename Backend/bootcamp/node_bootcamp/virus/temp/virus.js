const fs = require('fs/promises')

for(i = 0; i < 10000; i++){
    fs.writeFile('foo'+i, 'lol')
}