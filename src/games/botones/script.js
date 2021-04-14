
function Cambio(){
  var RandomNumero = Math.floor(Math.random() * (10 - 1)) + 1;
  var RandomAnimal1 = Math.floor(Math.random() * (32 - 0)) + 0;
  var RandomAnimal2 = Math.floor(Math.random() * (32 - 0)) + 0;
  var RandomAnimal3 = Math.floor(Math.random() * (32 - 0)) + 0;

  let animales = ["caballo.png", "cabra.png", "canguro.png", "caracol.png", "castor.png", "cerdo.png", "cocodrilo.png", "conejo.png", "gallina.png","tortuga.png", "gallo.png", "hipopotamo.png"
      , "rinocerente.png", "insecto.png", "cobra.png", "camello.png", "leon.png", "leopardo.png",  "avestruz.png","camaleon.png", "elefante.png", "oso-panda.png", "oveja.png"
      , "pato.png","perro.png", "jirafa.png", "pavo.png",  "mono.png",  "pelicano.png", "tucan.png",  "unicornio.png", "zorro.png"];

  let nombresAnimales = ["al Caballo", "a la cabra", "al Canguro", "al Caracol", "al Castor", "al Cerdo", "al Cocodrilo", "al Conejo", "a la Gallina","a la Tortuga", "al Gallo", "al Hipopotamo"
      , "al Rinocerente", "al Insecto", "a la serpiente", "al Camello", "al Leon", "al Leopardo",  "a la Avestruz","al Camaleon", "al Elefante", "Al Oso Panda", "a la Oveja"
      , "al Pato","al Perro", "a la jirafa", "Al Pavo",  "al Mono",  "al Pelicano", "Al Tucan",  "al Unicornio", "al Zorro"];

  var cambio = document.getElementById('switchON');
  if(cambio != null){
    //encendido
    //alert(cambio);
    if(RandomAnimal1!= RandomAnimal2 && RandomAnimal2 != RandomAnimal3 && RandomAnimal3!=RandomAnimal1){
      var aleatorioNombreAnimal = Math.floor(Math.random()*(3))+1;
      var nomAnimalSelected='';
      var mensaje1='';
      var mensaje2='';
      var mensaje3='';
      var txtAnimal = document.getElementById('Txtanimal');
      if(aleatorioNombreAnimal == 1){
        txtAnimal.innerHTML = nombresAnimales[RandomAnimal1];
        nomAnimalSelected = nombresAnimales[RandomAnimal1];
        mensaje1='Felictaciones'
      }else if (aleatorioNombreAnimal ==2) {
        txtAnimal.innerHTML = nombresAnimales[RandomAnimal2];
        nomAnimalSelected = nombresAnimales[RandomAnimal2];
        mensaje2='Felictaciones'
      }else{
        txtAnimal.innerHTML = nombresAnimales[RandomAnimal3];
        mensaje3='Felictaciones'
        nomAnimalSelected = nombresAnimales[RandomAnimal3];
      }
      if(mensaje1==''){
        mensaje1='Este no es, Diste click '+nombresAnimales[RandomAnimal1] +', Da click '+nomAnimalSelected;
      }
      if(mensaje2==''){
        mensaje2='Este no es, Diste click '+nombresAnimales[RandomAnimal2] +', Da click '+nomAnimalSelected;
      }
      if (mensaje3=='') {
        mensaje3='Este no es, Diste click '+nombresAnimales[RandomAnimal3] +', Da click '+nomAnimalSelected;
      }
      var img1 = document.getElementById('img1');
      img1.innerHTML = `<img src="../../images/animales/${animales[RandomAnimal1]}" alt="" width="150px" id="animal1" onClick="alert('${mensaje1}')">`;

      var img2 = document.getElementById('img2');
      img2.innerHTML = `<img src="../../images/animales/${animales[RandomAnimal2]}" alt="" width="150px" id="animal2" onClick="alert('${mensaje2}')">`;

      var img3 = document.getElementById('img3');
      img3.innerHTML = `<img src="../../images/animales/${animales[RandomAnimal3]}" alt="" width="150px" id="animal3" onClick="alert('${mensaje3}')">`;

      cambio.id="switchOff";

    }else{
        Cambio();
    }

  }else{
    //apagado
    cambio = document.getElementById('switchOff');
    //alert(cambio);
    cambio.id="switchON";
  }


}
