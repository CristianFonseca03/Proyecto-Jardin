let animales = ["oso-panda.png", "oveja.png","avestruz.png","elefante.png","unicornio.png"];
var NombreAnimal="";

function cargarImagenes(){

    var cajaInicial = document.getElementById('cajaimagenes');

    for(var i = 0 ; i<10 ; i++){
        var RandomAnimal = Math.floor(Math.random() * (5 - 0)) + 0;
        cajaInicial.innerHTML += `<img id="imagen${i}" name="${animales[RandomAnimal]}" src="images/animales/${animales[RandomAnimal]}">`

    }

}

function VocalAnimal(cadena){

    var vocal = cadena.split("");
    return vocal[0];
  
  }


function iniciar() {

    cargarImagenes();

    var imagenes = document.querySelectorAll('#cajaimagenes > img');
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('dragstart', arrastrado, false);
    }
    soltarCajaA = document.getElementById('cajasoltarA');
    soltarCajaE = document.getElementById('cajasoltarE');
    soltarCajaI = document.getElementById('cajasoltarI');
    soltarCajaO = document.getElementById('cajasoltarO');
    soltarCajaU = document.getElementById('cajasoltarU');

    //iniciar enventos cajaA
    soltarCajaA.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaA.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaA.addEventListener('drop', soltadoA, false);

    //iniciar enventos cajaE
    soltarCajaE.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaE.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaE.addEventListener('drop', soltadoE, false);
    //iniciar enventos cajaI
    soltarCajaI.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaI.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaI.addEventListener('drop', soltadoI, false);
    //iniciar enventos cajaO
    soltarCajaO.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaO.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaO.addEventListener('drop', soltadoO, false);
    //iniciar enventos cajaU
    soltarCajaU.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaU.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaU.addEventListener('drop', soltadoU, false);
}

function arrastrado(e) {
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
    NombreAnimal = elemento.getAttribute('name');
    console.log(NombreAnimal);
  
}

function soltadoA(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');


    if ("a" == VocalAnimal(NombreAnimal)) {
        var src = document.getElementById(id).src;
        console.log(id);


        soltarCajaA.innerHTML += `<img id="${id}C" src="${src}">`
        var image = document.getElementById(id);
        image.style.visibility = 'hidden';
    }
    else {
        alert('La imagen no inicia con esa vocal');
    }

}

function soltadoE(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if ("e" == VocalAnimal(NombreAnimal)) {
        var src = document.getElementById(id).src;
        console.log(id);

        soltarCajaE.innerHTML += `<img id="${id}C" src="${src}">`
        console.log(src);
        var image = document.getElementById(id);
        image.style.visibility = 'hidden';
    }
    else {
        alert('La imagen no inicia con esa vocal');
    }

}

function soltadoI(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if ("i" == VocalAnimal(NombreAnimal)) {
        var src = document.getElementById(id).src;
        console.log(id);

        soltarCajaI.innerHTML += `<img id="${id}C" src="${src}">`
        var image = document.getElementById(id);
        image.style.visibility = 'hidden';
    }
    else {
        alert('La imagen no inicia con esa vocal');
    }

}


function soltadoO(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if ("o" == VocalAnimal(NombreAnimal)) {
        var src = document.getElementById(id).src;
        console.log(id);

        soltarCajaO.innerHTML += `<img id="${id}C" src="${src}">`
        var image = document.getElementById(id);
        image.style.visibility = 'hidden';
    }
    else {
        alert('La imagen no inicia con esa vocal');
    }

}


function soltadoU(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if ("u" == VocalAnimal(NombreAnimal)) {
        var src = document.getElementById(id).src;
        console.log(id);

        soltarCajaU.innerHTML += `<img id="${id}C" src="${src}">`
        var image = document.getElementById(id);
        image.style.visibility = 'hidden';
    }
    else {
        alert('La imagen no inicia con esa vocal');
    }

}



window.addEventListener('load', iniciar, false);