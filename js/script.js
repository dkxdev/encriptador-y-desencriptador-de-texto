function encriptarTexto(){
    var texto = document.getElementById("mensaje").value.toLowerCase();
    let elemento = document.getElementById("mostrar");

    mensajeCifrado = texto.toString().replace(/e/igm,"enter");
    mensajeCifrado = mensajeCifrado.replace(/i/igm,"imes");
    mensajeCifrado = mensajeCifrado.replace(/a/igm,"ai");
    mensajeCifrado = mensajeCifrado.replace(/o/igm,"ober");    
    mensajeCifrado = mensajeCifrado.replace(/u/igm,"ufat");

    document.getElementById("imagen").style.display = "none";
    document.getElementById("textoNinguno").style.display = "none";
    elemento.classList.remove("display-none");
    document.getElementById("cifrado").innerHTML = mensajeCifrado;    
    document.getElementById("copiar").style.display = "show";
    document.getElementById("mensaje").value = "";
    document.getElementById("mensaje").focus();
}

function desencriptarTexto(){
    var texto = document.getElementById("mensaje").value.toLowerCase();
    let elemento = document.getElementById("mostrar");

    mensajeCifrado = texto.toString().replace(/enter/igm,"e");
    mensajeCifrado = mensajeCifrado.replace(/imes/igm,"i");
    mensajeCifrado = mensajeCifrado.replace(/ai/igm,"a");
    mensajeCifrado = mensajeCifrado.replace(/ober/igm,"o");    
    mensajeCifrado = mensajeCifrado.replace(/ufat/igm,"u");

    document.getElementById("imagen").style.display = "none";
    document.getElementById("textoNinguno").style.display = "none";
    elemento.classList.remove("display-none");
    document.getElementById("cifrado").innerHTML = mensajeCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("mensaje").value = "";
    document.getElementById("mensaje").focus();
}

function copiar(){
    var contenido = document.querySelector("#cifrado").value;
    
    navigator.clipboard.writeText(contenido).then(() => {
                alert("Copiado");
            });
      
    document.getElementById("mensaje").focus();
}