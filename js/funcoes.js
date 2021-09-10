function calculaBinario(binario){
    
    var result = parseInt(binario, 2);
    
    return result;
}

function mostrarResultado(bbinario){
    
    var result = calculaBinario(bbinario);

    //validação se número é binario.
    if (isNaN(result)){
        alert("Insira um numero binario");
    }else{
        //calculo

        let elResult = document.getElementById("result");
        elResult.innerHTML = `<h4> Resultado: ${result}</h4>`;
        console.log(result);
    }
}

function leDados(){
    var inputBinario = document.getElementById("entradaBinario");

    return inputBinario.value;
}
