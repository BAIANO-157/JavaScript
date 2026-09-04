function exemploVar() {
    var x = 10;
    if (true) {
       var x = 20; // memsma variavel x e redeclarada dentro do bloco
       console.log(x); // 20 
    }
    console.log(x); // 20 (o valor foi alterado)
}

exemploVar();