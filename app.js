let input = document.querySelector("#num-binario");
let btnConvertir = document.querySelector("#btn-convertir");
let mostrar = document.querySelector(".mostrar");

btnConvertir.addEventListener("click", (evento) => {
    let binario = input.value;
    //TODO: CREAR FUNCION DE VALIDACION

    let resultado = convertirABinario(binario);

});

function convertirABinario(binario){
    let cadenaNumeros = binario.split("");

}