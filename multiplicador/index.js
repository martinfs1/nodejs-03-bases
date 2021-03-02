const fs = require("fs");
const { logica } = require("./logica");

const multiplicar = (base) => {
  const resultado = logica(base);
  console.log(resultado);

  const nombreArchivo = `tabla-del-${base}`;
  fs.writeFile(`tablas/tabla-del-${base}`, resultado, (err) => {
    if (err) throw err;
    console.log(`el archivo ${nombreArchivo} fue creado!`);
  });
};
module.exports = {
  multiplicar,
};
