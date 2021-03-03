const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multipiplicar'
        })
        .option('l', {
            alias: 'limite',
            type: 'number',
            demandOption: false,
            default: 10,
            describe: 'Es el limite de la tabla'
        })
        .check((argv, options) => {
            if(isNaN(argv.b)){
                throw new Error('La base tiene que ser un numero')
            }
            return true
        })
        .help()         

const { options } = require('yargs');
const {multiplicar} = require("./multiplicador")

// console.log(argv)

// const base = 7 

multiplicar(argv.base);



