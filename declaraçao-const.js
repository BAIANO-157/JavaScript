function exemploConst() {
    const x = 10;
    console.log(x); // 10
    // x = 20; //isso causara um erro porque x foi declarado como const
    if (true) {
        const y = 30
        console.log(y) // 30
    }
    // console.log(y); // isso causara um erro por que o Y nao existe fora do bloco
}
exemploConst();