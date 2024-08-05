let inputTexto = document.getElementById("texto");

function encriptar(){
    let cadena = inputTexto.value;
    let encriptado = convertir(1,cadena);
    document.getElementById("resultado").className = "resultado__encriptado";
    document.getElementById("resultado").innerHTML= `<span id="textoResultado" class="resultado">${encriptado}</span>`+'<button class="button__copiar" onclick="copiarEnPortapapeles()" >Copiar</button>';
}

function sinValor(){
    let cadena = inputTexto.value;
    if(cadena.trim() == ""){
        document.getElementById("resultado").className = "container__resultado_encriptado";
        document.getElementById("resultado").innerHTML = '<div class="container__resultado_encriptado__img"><img src="assets/Muñeco.png" alt=""></div><div class="container__resultado_encriptado__mensaje"><span>Ningun mensaje fue encontrado</span><p>Ingresa el texto que desees encriptar o desencriptar</p></div>';
    }
}

function desencriptar(){
    let cadena = inputTexto.value;
    let cadDesencriptada = convertir(2, cadena)
    document.getElementById("resultado").className = "resultado__encriptado";
    document.getElementById("resultado").innerHTML = '<span id="textoResultado" class="resultado">'+cadDesencriptada+'</span>'+'<button class="button__copiar" onclick="copiarEnPortapapeles()">Copiar</button>';

    /* document.getElementById("resultado").innerHTML= `<p class="resultado">${cadDesencriptada}</p>` */
}

function convertir(accion, cadena){
    let cadenaConvertida;
    switch(accion){
        case 1:
            cadenaConvertida = cadena.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
            break;
        case 2:
            cadenaConvertida = cadena.replace(/ai/g, 'a')
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
            break;
        default:
            break;
    }
    return cadenaConvertida
}

function copiarEnPortapapeles(){
    let textarea = document.getElementById("textoResultado").textContent;
    navigator.clipboard.writeText(textarea);
    alert('Copiado en el portapapeles')
    /* textarea.select();
    document.execCommand('copy'); */
}