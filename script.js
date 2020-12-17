/*const sonicJson = {"name" : "Sonic" , "description" : "Icone de Sonic", "src" : "images/sonic.png"};
var sonicObject = JSON.parse(sonicJson);
document.getElementById("src").innerHTML = sonicObject.src;

const MarioJson = {"name" : "Mario" , "description" : "Icone de Mario", "src" : "images/mario.png"};
var marioObject = JSON.parse(JSON.stringify(marioJson));
document.getElementById("src").innerHTML = marioObject.src;

const CaptainJson = {"name" : "Captain Falcon" , "description" : "Icone de Captain Falcon", "src" : "images/captain.png"};
var captainObject = JSON.parse(captainJson);
document.getElementById("src").innerHTML = captainObject.src;

const PikachuJson = {"name" : "Pikachu" , "description" : "Icone de Pikachu", "src" : "images/pika.png"};
var pikachuObject = JSON.parse(pikachuJson);
document.getElementById("src").innerHTML = pikachuObject.src;

const FalcoJson = {"name" : "Falco" , "description" : "Icone de Falco", "src" : "images/falco.png"};
var falcoObject = JSON.parse(falcoJson);
document.getElementById("src").innerHTML = falcoObject.src;*/

var afficher=false; 
var html = `
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<table>
  <tbody>
    <tr>
      <td><img src='images/sonic.png' alt='sonic' class='photo'></td>
      <td><img src='images/mario.png' alt='mario' class='photo'></td>
      <td><img src='images/captain.png' alt='captain' class='photo'></td>
      <td><img src='images/pika.png' alt='pikachu' class='photo'></td>
      <td><img src='images/falco.png' alt='falco' class='photo'></td>
    </tr>
    <tr>
      <td><p class='characterName' style="font-size:2vw;"/>SONIC</p></td>
      <td><p class='characterName' style="font-size:2vw;"/>MARIO</p></td>
      <td><p class='characterName' style="font-size:2vw;"/>CAPTAIN FALCON</p></td>
      <td><p class='characterName' style="font-size:2vw;"/>PIKACHU</p></td>
      <td><p class='characterName' style="font-size:2vw;"/>FALCO</p></td>
    </tr>
  </tbody>
</table>`;

function viewImage(id) {
    var contenuImage=!afficher ? 
    html : "<img src='images/ball.png' alt='ball' clas='photo'> ";
    afficher=!afficher;
    var contenuBouton=afficher ? "<h2 style='font-size:2vw;'>Cacher les icones</h2>" : "<h2 style='font-size:2vw;'>Afficher les icones</h2>" ; 
     
    document.getElementById(id).innerHTML=contenuImage;
    document.getElementById("bouton").innerHTML=contenuBouton;
}