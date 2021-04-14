function Cambio(){
  var cambio = document.getElementById('switchON');
  if(cambio != null){
    //encendido
    alert(cambio);
    cambio.id="switchOff";
  }else{
    //apagado
    cambio = document.getElementById('switchOff');
    alert(cambio);
    cambio.id="switchON";
  }


}
