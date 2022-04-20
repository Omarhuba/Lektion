const os = require('os')

const plateform = os.platform()
const version = os.release()
const totalmem = os.totalmem()
const cpus = os.cpus()

console.log(`plateform:${plateform}`)
console.log(`version:${version}`)
console.log(`totalmem:${totalmem}`)
for(cpu in cpus){
    console.log(cpus[cpu].model )

}