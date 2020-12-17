var afficher=false; 
var html = `
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<table>
  <tbody>
    <tr>
      <td><img src='images/sonic.png' alt='sonic' style="max-width:100%;height:auto;"></td>
      <td><img src='images/mario.png' alt='mario' style="max-width:100%;height:auto;"></td>
      <td><img src='images/captain.png' alt='captain' style="max-width:100%;height:auto;"></td>
      <td><img src='images/pika.png' alt='pikachu' style="max-width:100%;height:auto;"></td>
      <td><img src='images/falco.png' alt='falco' style="max-width:100%;height:auto;"></td>
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
    html : "<img src='images/ball.png' alt='ball'> ";
    afficher=!afficher;
    var contenuBouton=afficher ? "<h2>Cacher les icones</h2>" : "<h2>Afficher les icones</h2>" ; 
     
    document.getElementById(id).innerHTML=contenuImage;
    document.getElementById("bouton").innerHTML=contenuBouton;
}