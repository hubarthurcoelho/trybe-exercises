
const custo = 100;
const venda = 300;

if (custo >= 0 && venda >= 0) {
  const custoTotal = custo * 1.2;
  const lucro = (venda - custoTotal) * 1000;
  console.log(lucro);
} else {
  console.log("Error, os valores não podem ser negativos");
};