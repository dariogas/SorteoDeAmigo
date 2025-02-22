// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let numeroSorteo = 0;
let amigoNuevo;

function agregarAmigo(){
    amigoNuevo = document.getElementById('amigo').value;
    if(amigoNuevo==""){
        alert("Escriba un nombre valido!!");
        limpiar();
    
    }else{
        listaDeAmigos.push(amigoNuevo);
        mensajes('listaAmigos', listaDeAmigos);
        limpiar();
    }
}

function mensajes(id, texto){
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
}

function sortearAmigo(){
    numeroSorteo = Math.floor(Math.random()*listaDeAmigos.length);
    console.log(listaDeAmigos[numeroSorteo]);
    return mensajes('resultado', `El amigo sorteado es: ${listaDeAmigos[numeroSorteo]}`);   
}

function limpiar(){
    document.getElementById('amigo').reset();
}