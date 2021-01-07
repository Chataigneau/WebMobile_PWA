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
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img
                        src="https://giffiles.alphacoders.com/981/98174.gif"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">${repo.name}</p>
                    <p class="subtitle is-6">@Parcourir</p>
                  </div>
                </div>
  
                <div class="content">
                   ${repo.description}
                </div>
              </div>
            </div>
          </div>`;
    });
    html += "</div>";
  });

  document.querySelector(".gallery").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
  fetch("https://nicolaswebmobilepwa.netlify.app/images.json")
    .then((response) => response.json())
    .then((json) => afficher(json));  
});

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