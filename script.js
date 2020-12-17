  var afficher=false; 
              var html = `
              <table>
                <tbody>
                  <tr>
                    <td><img src='images/sonic.png' alt='sonic'></td>
                    <td><img src='images/mario.png' alt='mario'></td>
                    <td><img src='images/captain.png' alt='captain'></td>
                    <td><img src='images/pika.png' alt='pikachu'></td>
                    <td><img src='images/falco.png' alt='falco'></td>
                  </tr>
                  <tr>
                    <td><p class='characterName'/>SONIC</p></td>
                    <td><p class='characterName'/>MARIO</p></td>
                    <td><p class='characterName'/>CAPTAIN FALCON</p></td>
                    <td><p class='characterName'/>PIKACHU</p></td>
                    <td><p class='characterName'/>FALCO</p></td>
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