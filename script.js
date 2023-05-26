const cajaTexto = document.getElementById ("cajaTexto");

const botonEncriptar = document.getElementById ("botonEncriptar");

const botonDesencriptar = document.getElementById ("botonDesencriptar");

const botonCopiar = document.getElementById("botonCopiar");

const mensajeTxt = document.getElementById("mensajeTxt");

const muñeco = document.getElementById("muñeco");

const mensajeTxt2 = document.getElementById ("mensajeTxt2");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajeTxt.innerHTML = nuevoValor;

    muñeco.style.display ="none";
    cajaTexto.value = "";

    mensajeTxt2.style.display = "none";

    botonCopiar.style.display = "block";

    right.classList.add ("ajustar");
}

botonEncriptar.addEventListener("click", () =>{
    const texto = cajaTexto.value.toLowerCase()
    function encriptar(newText){
        for (let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
            };
        };
        return newText
    }
    //const textoEncriptado = encriptar(texto);

    //mensajeTxt.innerHTML = textoEncriptado;
    remplace(encriptar(texto));

    /*muñeco.style.display ="none";

    mensajeTxt2.style.display = "none";

    botonCopiar.style.display = "block";

    right.classList.add ("ajustar");*/
    
    //cajaTexto.value ="";


});

botonDesencriptar.addEventListener("click", () =>{
    const texto= cajaTexto.value.toLowerCase();
    function desencriptar(newText){
        for (let i= 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][1])){
                newText = newText.replaceAll(remplazar[i][1], remplazar [i][0]);
            };
        };
        return newText;
    }

    remplace (desencriptar(texto));


    /*const textoDesencriptado = desencriptar (texto);
    mensajeTxt2.innerHTML = textoDesencriptado;

    muñeco.style.display ="none";

    mensajeTxt.style.display = "none"*/

    

});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeTxt;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    //document.execCommand('selectAll')
    document.execCommand('copy');

    
    alert ("Texto Copiado");

    mensajeTxt.innerHTML = "";
    muñeco.style.display = "block";
    mensajeTxt2.style.display = "block";
    botonCopiar.style.display = "none";
    cajaTexto.focus();

})