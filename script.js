var afficher=false;

/*
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
</table>`;*/

function viewImage(id) {

    var contenuImage=!afficher ? 
    html : "<img src='images/ball.png' alt='ball' clas='photo'> ";
    afficher=!afficher;
    var contenuBouton=afficher ? "<h2 style='font-size:2vw;'>Cacher les icones</h2>" : "<h2 style='font-size:2vw;'>Afficher les icones</h2>" ; 
     
    document.getElementById(id).innerHTML=contenuImage;
    document.getElementById("bouton").innerHTML=contenuBouton;
}

window.addEventListener('beforeinstallprompt', e => { 
  e.preventDefault() ; 
  deferredPrompt = e ; 
  const btn = document.getElementById('button') ; 
 
  btn.addEventListener('click', e  =>{ 
    deferredPrompt.prompt() ; 
 
    deferredPrompt.userChoice 
      .then((choiceResult) => { 
         if (choiceResult.outcome === 'accepted') { 
           console.log('A2HS prompt accepté'); 
         } else { 
            console.log('A2HS prompt décliné'); 
       } 
    deferredPrompt = null; 
   }); 
  }) ; 
}) ;

window.addEventListener('appinstalled', e => { 
   console.log('application installée') ; 
}) ;

function reduireArray(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...reduireArray(array.slice(size), size)];
}

const dateTimeFormat = Intl.DateTimeFormat("fr");

function afficher(json){
	const selections = reduireArray(json, 4);

  let html = "";

  selections.forEach(selection => {
    html += '<div class="columns">';

    selection.forEach(repo => {
      html += `
            <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="${repo.url}"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  </div>
                  <div class="media-content">
                    <p class="title is-4">${repo.name}</p>
                  </div>
                </div>
  
                <div class="content">
                   ${repo.description}
                  <br />
                </div>
              </div>
            </div>
          </div>`;
    });
    html += "</div>";
  });

  document.querySelector(".gallery").innerHTML = html;
}