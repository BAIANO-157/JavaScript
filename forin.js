const carro = {
    marca: "Honda",
    modelo: "Civc",
    ano: 2017,
    cor: "Preto"
};
for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}