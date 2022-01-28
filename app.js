let input = document.querySelector("#num-binario");
let btnConvertir = document.querySelector("#btn-convertir");
let mostrar = document.querySelector(".mostrar");

btnConvertir.addEventListener("click", (evento) => {
    let binario = input.value;
    //TODO: CREAR FUNCION DE VALIDACION
    let esBinario = validarNumeroBinario(binario);
    if(!esBinario){
        mostrarMensajeError();
        return;
    }
    let resultado = convertirABinario(binario);
    mostrarResultado(resultado);
});

function convertirABinario(binario){
    let cadenaNumeros = binario.split("").reverse();
    let numeros = cadenaNumeros.map(num => parseInt(num));
    let decimal = 0;
    for(let i = 0; i < numeros.length; i++){
        decimal += numeros[i] * (2**i);
    }
    return decimal;
}

function mostrarResultado(resultado){
    mostrar.classList.remove('error');
    mostrar.textContent = resultado;
    input.focus();
    input.select();
}

function validarNumeroBinario(num){
    num = parseInt(num);
    let exp = /^[0-1]+$/;
    let esBinario = false;
    
    if(!isNaN(num)){
        esBinario = exp.test(num);
    }
    return esBinario;
}

function mostrarMensajeError(){
    mostrar.classList.add('error');
    mostrar.textContent = 'Debe ingresar solo 0(s) y 1(s)';
    input.value = '';
    input.focus();
}



