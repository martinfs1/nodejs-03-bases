const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })

  .option("l", {
    alias: "limite",
    type: "number",
    demandOption: false,
    default: 10,
    describe: "Es el limite de la tabla",
  })

  .option("v", {
    alias: "visualizar",
    type: "boolean",
    demandOption: false,
    default: false,
    describe: "Permite visualizar la tabla si se agrega el parametro",
  })  

  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La base tiene que ser un numero");
    }
    return true;
  })
  .help()
  .version().argv;

const { options } = require("yargs");
const { multiplicar } = require("./multiplicador");

multiplicar(argv.b, argv.l, argv.v);
