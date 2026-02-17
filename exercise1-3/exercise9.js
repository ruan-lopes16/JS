for(let linha = 1; linha <= 5; linha++){  // Loop externo: linhas
    let asteriscos = ""  // Variável para acumular os asteriscos
    
    for(let i = 1; i <= linha; i++){  // Loop interno: asteriscos
        asteriscos = asteriscos + "*"  // Adiciona um * a cada volta
    }
    
    console.log(asteriscos)  // Imprime a linha completa
}