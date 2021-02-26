const fs = require("fs");

const multiplicar = (base) => {
  let resultado = "";

  for (let index = 1; index <= 10; index++) {
    resultado += `${base} * ${index} = ${base * index}\n`;
  }
  console.log(resultado);

  fs.writeFileSync(`tablas/tabla-del-${base}`, resultado);
};
module.exports = {
  multiplicar,
};
