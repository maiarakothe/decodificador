let e = 'enter';
let i = 'imes';
let a = 'ai';
let o = 'ober';
let u = 'ufat';

let enter = 'e';
let imes = 'i';
let ai = 'a';
let ober = 'o';
let ufat = 'u';


let res = document.getElementById('res');
let textoElemento = document.getElementById('text');



function verificarTexto(texto) {
    const regex = /[A-ZÁ-Úá-ú!@#\$%\^\&*\)\(+=._-]/g;
    if (regex.test(texto)) {
        alert('O texto contém letras maiúsculas ou caracteres especiais');
        return false;
    }
    return true;
}

function criptografar() {
    res.innerHTML = '';
    let texto = textoElemento.value ;

    if (!verificarTexto(texto)) {
        return
    }

    texto = texto.replace(/e/g, e)
                .replace(/i/g, i)
                .replace(/a/g, a)
                .replace(/o/g, o)
                .replace(/u/g, u);

    res.innerHTML = `${texto}`
}

function descriptografar() {
    let texto = textoElemento.value;

    if (!verificarTexto(texto)) {
        return
    }

    texto = texto.replace(/enter/g, enter)
            .replace(/imes/g, imes)
            .replace(/ai/g, ai)
            .replace(/ober/g, ober)
            .replace(/ufat/g, ufat);

    res.innerHTML = `${texto}`
}

