function calculaBinario(binario){
    
    var result = parseInt(binario, 2);
    
    return result;
}

function mostrarResultado(bbinario){
    
    var result = calculaBinario(bbinario);

    // let elBinario = document.getElementById("saidaBinario");
    // elBinario.innerHTML = bbinario;
    

    //calculo
    let elResult = document.getElementById("result");
    elResult.innerHTML = `<h4> Resultado: ${result}</h4>`;
}

function leDados(){
    var inputBinario = document.getElementById("entradaBinario");

    return inputBinario.value;
}
