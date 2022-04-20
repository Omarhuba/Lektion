
let program = ["mov a 5", "inc a", "inc a"]

// function instr(program, start, stop) {
//     let testerInstr = ""
//     for (let j = start; j <= stop; j++) {
//         testerInstr += program[j]

//     }
//     return testerInstr
// }

// function interpret(program) {
//     let newResult={}
//     for (let i = 0; i < program.length; i++) {
//         program[i]="mov a 5";
//         let splitcode = program[i].split(' ');
//         const result = sp
//         let instTest = instr(program[i], 0, 2)
//         if (instTest == "mov") {
//             newResult[program[i]] ="mov a 5";
//         }if (instTest == "inc") {

//         } else {

//         }{
//         }


//     }return newResult
// }
// let result = interpret(program) 




function interpret(program) {
    let state = {}
    for (let i = 0; i < program.length; i++) {
        const instructionString = program[i];
        // const parts = instructionString.split(" ")
        // const instruction = parts[0]
        // const regester = parts[1]
        // const value = parts[2]
        const [instruction, register, value] = instructionString.split(" ")
        if (instruction == "mov") {
            state[register] = Number(value)
        } else if (instruction == "inc") {
            state[register]++
        } else if (instruction == "dec") {
            state[register]--
        } else if (instruction == "jnz") {
            state[register]
            if (state[register] != 0) {
                i += value - 1
            }
        } 
    }
    return state;
}
function main() {
    let x = interpret(program)
}
main();


// const instructionString = program[i];
// // const parts = split(instructionString, " ")
// // const instruction = parts[0]
// // const regester = parts[1]
// // const value = parts[2]
// const [instruction, register, value] = instructionString.split(" ")

// //  kan man skriva oxå
//  const [ins,reg,val]=split(  )






